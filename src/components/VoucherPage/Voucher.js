import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid,  } from 'semantic-ui-react'
import Intro from './Intro'
import BarCode from './BarCode'
import CustomIntl from '../../utils/CustomIntl'
import EmailInput from './EmailInput'


import { WalletCircleMoney, WalletCirleDiscount, WalletCirleItem } from './styles'


const getShape = (shape) => {
  switch (shape) {
    case 'circle':
      return '50'
    case 'rounded':
      return '30'
    case 'square':
      return '0'
    default:
      break;
  }
}

const DisplayWalletCircle = (amount, type, styles) => {

  const shape = getShape(styles.pastille.shape) 
  if(type === "discountVoucher"){
    return  <WalletCirleDiscount shapePercent={shape} color={styles.pastille.color || "#4cd784"}> <span className='wallet-amount'>{ amount }</span></WalletCirleDiscount>
  } else if(type === "moneyVoucher"){
    return  <WalletCircleMoney shapePercent={shape} color={styles.pastille.color || "#4cd784"}><span className='wallet-amount'>{ amount }</span></WalletCircleMoney>
  } else if(type === "itemVoucher"){
    return <WalletCirleItem shapePercent={shape} color={styles.pastille.color || "#4cd784"}><span className='wallet-amount'>{ amount }</span></WalletCirleItem>
  }
  return ""
}

const VoucherAmount = ({ amount, type, styles }) => (
  <Grid.Row>
    <Grid.Column width={16}>
        {DisplayWalletCircle(amount, type, styles)}
    </Grid.Column>
  </Grid.Row>
)

VoucherAmount.propTypes = {
  amount: PropTypes.number.isRequired
}

class Voucher extends Component {
  constructor () {
    super()

    this.state = {
      storesModalOpen: false,
      isEmailInputVisible: true
    }

    this.handleStoresBtnClick = this.handleStoresBtnClick.bind(this)
  }

  handleStoresBtnClick () {
    this.setState({
      storesModalOpen: !this.state.storesModalOpen
    })
  }

  onEmailInputSubmit = (inputValue) => {
    
    const token = this.props.voucher.get('token')
    this.props.sendEmail(inputValue,token)
    console.log(inputValue)
  }


  render () {
    
    const { voucher, mode, displayModal, email} = this.props
    const { isEmailInputVisible } = this.state
    const isConsumed = mode === "consumed" || (voucher.get('status') === 'consumed' && voucher.get('voucherDetails').currentValue === 0)
    const isExpired = mode === "expired" ||  voucher.get('status') === 'expired'
    const templateRef = voucher.get('templateRef') || {}
    const isLocked = voucher.get('isLocked') === true
    return (
      <div>
        <Grid container textAlign='center'>
          <Intro
            amount={voucher.get('voucherDetails').currentValue}
            isConsumed={isConsumed}
            isExpired={isExpired}
            onStoresLinkClick={this.handleStoresBtnClick}
            voucher={voucher}
            description={CustomIntl(voucher,"instruction")}
            title={CustomIntl(voucher,"title")}
            mode={mode}
            styles={voucher.get('templateRef').get('styles')}
          />
           <div style={{ position: 'relative', width: '100%', padding: '16px 0', minHeight: '280px' }}>
            { isLocked && <EmailInput visible={isEmailInputVisible} onSubmit={(e) => this.onEmailInputSubmit(e)} isConfirmLoading={email.isConfirmLoading} isRequestSuccessfully={email.isRequestSuccessfully}/> }
            {
              !isExpired && !isConsumed &&
              <BarCode
                format={templateRef.get('barCodeFormat') || 'BAR'}
                token={voucher.get('token')}
                expireAt={voucher.get('expireAt')}
                withExpiration={templateRef.get('withExpiration')}
                prefix={templateRef.get('prefix')}
                withPrefix={templateRef.get('withPrefix')}
                status={voucher.get('status')}
                mode={mode}
                displayModal={displayModal}
                voucher={voucher}
              />
            }
            {
              !isExpired && <VoucherAmount  styles={voucher.get('templateRef').get('styles')} amount={voucher.get('voucherDetails').currentValue} 
                type={templateRef.get('type')}/>
            }
            </div>
        </Grid>
      </div>
    )
  }
}

Voucher.propTypes = {
  voucher: PropTypes.object.isRequired
}

export default Voucher
