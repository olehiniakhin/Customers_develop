import { CALL_API, RequestError } from 'redux-api-middleware'
import { constructEndPoint } from '../../utils'
import { API_ENDPOINTS } from '../../config'

// Constants
export const FETCH_STORES_REQUEST = 'FETCH_STORES_REQUEST'
export const FETCH_STORES_RECEIVE = 'FETCH_STORES_RECEIVE'
export const FETCH_STORES_FAILURE = 'FETCH_STORES_FAILURE'

// Action Creators
export function fetchStores (terminalId) {
  return {
    [CALL_API]: {
      endpoint: constructEndPoint(API_ENDPOINTS.STORES, '', { terminalId }),
      method: 'GET',
      types: [
        FETCH_STORES_REQUEST,
        {
          type: FETCH_STORES_RECEIVE,
          payload: (action, state, res) => {
            return res.json()
              .then(json => ({
                response: json
              }))
              .catch(err => (
                // JSON conversion failed
                {
                  error: true,
                  errorObj: new RequestError(err)
                }
              ))
          }
        },
        FETCH_STORES_FAILURE
      ]
    }
  }
}
