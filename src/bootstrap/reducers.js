import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'
import vouchers from '../modules/vouchers/reducers'
import stores from '../modules/stores/reducers'

export default combineReducers({
  vouchers,
  stores,
  intl: intlReducer
})
