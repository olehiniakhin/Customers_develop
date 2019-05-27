import React, {Component} from 'react'
import { Dimmer, Loader, Container} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
import {FormattedMessage} from 'react-intl'


class VoucherPage extends Component {
  constructor() {
    super()
    this.state = {
      storesModalOpen: false
    }
  }

  componentDidMount() {
    const {cp} = this.props.match.params
    this.props.generateVoucher(cp)
  }

  render() {
    const {token, error} = this.props
    if (token) {
      return (<Redirect to={'/'+token}/>)
    } else if(error){
      return (<Redirect to={'/'+404}/>)
    }
    return (
      <Container Padded>
        {true && <Dimmer inverted active>
          <Loader>
            <FormattedMessage id='messages.loading' defaultMessage={'Loading'}/>
          </Loader>
        </Dimmer>}
      </Container>
    )
  }
}

export default VoucherPage
