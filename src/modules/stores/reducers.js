import {
  FETCH_STORES_REQUEST,
  FETCH_STORES_RECEIVE,
  FETCH_STORES_FAILURE
} from './actions'

const initState = {
  isFetchingStores: false,
  error: false,
  storesList: []
}

export default function storesReducer (state = initState, action) {
  switch (action.type) {
    case FETCH_STORES_REQUEST:
      return {
        ...state,
        error: false,
        isFetchingStores: true
      }

    case FETCH_STORES_RECEIVE:
      return {
        ...state,
        isFetchingStores: false,
        storesList: action.payload.response
      }

    case FETCH_STORES_FAILURE:
      return {
        ...state,
        isFetchingStores: false,
        error: true
      }

    default:
      return state
  }
}
