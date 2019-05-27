import { connect } from 'react-redux'
import { readVoucher, unlockVoucher, sendEmail } from '../../modules/vouchers/actions'
import Voucher from '../../components/VoucherPage'

const mapStateTopProps = (state) => {
  return {
    isFetchingVoucher: state.vouchers.isFetchingVoucher,
    voucher: state.vouchers.voucher,
    error: state.vouchers.error,
    errorObj: state.vouchers.errorObj,
    hasError: state.vouchers.hasError,
    errorOnGenerating:state.vouchers.errorOnGenerating,
    mode:state.vouchers.mode,
    displayModal:state.vouchers.displayModal,
    email:state.vouchers.email
  }
}

const mapActionCreators = {
  readVoucher,
  unlockVoucher,
  sendEmail
}

export default connect(mapStateTopProps, mapActionCreators)(Voucher)
