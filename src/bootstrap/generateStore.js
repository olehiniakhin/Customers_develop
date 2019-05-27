import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from '../bootstrap/reducers'

const middleware = [thunk, apiMiddleware]

export default function configureStore (initialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  )
}
