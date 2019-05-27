import { connect } from 'react-redux'
import { generateVoucher } from '../../modules/vouchers/actions'
import Redirect from '../../components/RedirectPage'

const mapStateTopProps = (state) => {
  return {
    isGeneratingVoucher: state.vouchers.isGeneratingVoucher,
    error: state.vouchers.error,
    token:state.vouchers.token
  }
}

const mapActionCreators = {
  generateVoucher
}

export default connect(mapStateTopProps, mapActionCreators)(Redirect)
