
import { connect } from 'react-redux'
import { unlockVoucher } from '../../modules/vouchers/actions'
import VerifiyTokenPage from '../../components/VerifiyTokenPage'

const mapStateTopProps = (state) => {
  
  return {
    isGeneratingVoucher: state.vouchers.isGeneratingVoucher,
    error: state.vouchers.error,
    token:state.vouchers.token
  }
}

const mapActionCreators = {
  unlockVoucher
}

export default connect(mapStateTopProps, mapActionCreators)(VerifiyTokenPage)
