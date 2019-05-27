import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Grid, Dimmer, Loader, Container} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'
import VoucherHeader from './VoucherHeader'
import Voucher from './Voucher'
import Footer from './Footer'
import Modal from '../Modal'
import StoresView from '../../containers/StoresView/StoresView'

const getImageUrl = (templateRef) => {
  if(templateRef){
    if(templateRef.get('image') && templateRef.get('imageMode') === "PC"){
      return templateRef.get('image').url()
    }
    if(templateRef.get('imageURL')){
      return templateRef.get('imageURL')
    }
  }
  return "";
}

class VoucherPage extends Component {
  constructor() {
    super()
    this.state = {
      storesModalOpen: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.voucher && nextProps.voucher.get('templateRef') &&  nextProps.voucher.get('templateRef').get('styles')){
      if(nextProps.voucher.get('templateRef').get('styles').background.mode === 'color'){
        document.body.style.backgroundColor = nextProps.voucher.get('templateRef').get('styles').background.color;
      }
      // } else if(nextProps.voucher.get('templateRef').get('styles').background.mode === 'color'){
      //   document.body.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0468/6581/files/Skull_mobile.jpg?1924916703292726463')"
      //   document.body.style.backgroundColor = nextProps.voucher.get('templateRef').get('styles').background.color;
      // }
    }
  }

  componentDidMount() {
    const {voucherCode, templateId, mode, displayModal} = this.props.match.params
    this
      .props
      .readVoucher(voucherCode, templateId, mode, displayModal)
  }

  handleStoresBtnClick = (voucher) => {
   if(voucher.get('templateRef')){
     if(voucher.get('templateRef').get('callLink')){
      window.open(voucher.get('templateRef').get('callLink'), "_blank") 
     }
   }
  }

  render() {
    const {isFetchingVoucher, voucher, hasError, mode, displayModal, email, sendEmail} = this.props

    if (hasError) {
     return (<Redirect to='/404'/>)
    }
    return (
      <Container Padded>
        {isFetchingVoucher && <Dimmer inverted active>
          <Loader>
            <FormattedMessage id='messages.loading' defaultMessage={'Loading'}/>
          </Loader>
        </Dimmer>}
        {voucher && <div>
          <Grid verticalAlign='middle' columns={1}>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {<VoucherHeader logo={getImageUrl(voucher.get('templateRef'))}/>}
              {<Voucher voucher={voucher} mode={mode} displayModal={displayModal} sendEmail={sendEmail} email={email}/>}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid Padded container verticalAlign="bottom" columns={1}>
            {
            <Footer 
              onStoresBtnClick={() => this.handleStoresBtnClick(voucher)} 
              templateRef={voucher.get('templateRef')}
              voucher={voucher}
            />
            }
        </Grid>
        </div>}
        <Modal isOpen={this.state.storesModalOpen} onClose={this.handleStoresBtnClick}>
          <StoresView closeView={this.handleStoresBtnClick}/>
        </Modal>
      </Container>
    )
  }
}

VoucherPage.propTypes = {
  match: PropTypes.object.isRequired,
  isFetchingVoucher: PropTypes.bool.isRequired,
  voucher: PropTypes.object
}

export default VoucherPage

