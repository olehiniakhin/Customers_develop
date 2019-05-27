import {
  FETCH_VOUCHER_REQUEST,
  FETCH_VOUCHER_SUCCESS,
  FETCH_VOUCHER_FAILURE,
  UPDATE_VOUCHER,
  GENERATE_VOUCHER_REQUEST,
  GENERATE_VOUCHER_SUCCESS,
  GENERATE_VOUCHER_FAILURE,
  SET_VOUCHER_MODE,
  SEND_EMAIL_VOUCHER_SUCCESS,
  SEND_EMAIL_VOUCHER_FAILURE,
  SEND_EMAIL_VOUCHER_REQUEST,
  UNLOCK_VOUCHER_FAILURE
} from './actions'

const initState = {
  isFetchingVoucher: true,
  error: false,
  voucher: null,
  hasError:false,
  isGeneratingVoucher:true,
  mode:undefined,
  displayModal:'false',
  email:{isRequestSuccessfully:false, isConfirmLoading:false}
}

export default function voucherReducer (state = initState, action) {
  switch (action.type) {
    case FETCH_VOUCHER_REQUEST:
      return {
        ...state,
        error: false,
        hasError:false,
        isFetchingVoucher: true
      }

    case FETCH_VOUCHER_SUCCESS:
      return {
        ...state,
        hasError:false,
        isFetchingVoucher: false,
        voucher: action.payload,
        error: action.payload.error,
        errorObj: action.payload.errorObj
      }
    case SET_VOUCHER_MODE:    
     return {
       ...state,
       mode:action.payload.mode,
       displayModal:action.payload.displayModal
     }
    case FETCH_VOUCHER_FAILURE:
      return {
        ...state,
        hasError:true,
        isFetchingVoucher: false,
        error: true
      }
    case UPDATE_VOUCHER:
      return {
        ...state,
        voucher:action.payload
      }
    case GENERATE_VOUCHER_REQUEST:
      return {
        ...state,
        isGeneratingVoucher:true
      }
    case GENERATE_VOUCHER_SUCCESS:
      return {
        ...state,
        token:action.payload,
        isGeneratingVoucher:false
      }
    case GENERATE_VOUCHER_FAILURE:
      return {
        ...state,
        isGeneratingVoucher:false,
        hasError:true,
        isFetchingVoucher: false,
        error: action.payload.error,
        errorObj: action.payload.errorObj
      }
    case SEND_EMAIL_VOUCHER_SUCCESS:{
      return {
        ...state,
        email:{...state.email, isRequestSuccessfully:true, isConfirmLoading:false}
      }
    }
    case SEND_EMAIL_VOUCHER_REQUEST:{
      return {
        ...state,
        email:{...state.email, isConfirmLoading:true}
      }
    }
    case SEND_EMAIL_VOUCHER_FAILURE:{
      return {
        ...state,
        email:{...state.email, isRequestSuccessfully:false, isConfirmLoading:false}
      }
    }
    case UNLOCK_VOUCHER_FAILURE:
    return {
      ...state,
      isGeneratingVoucher:false,
      hasError:true,
      isFetchingVoucher: false,
      error: action.error,
      errorObj: action.errorObj
    }
    default:
      return state
  }
}
