import {combineReducers} from 'redux'
import {createBrowserHistory} from 'history'
import {connectRouter} from 'connected-react-router'
import squares from './squares'

export const history = createBrowserHistory()

export default (state, action) => {
  return combineReducers({
    squares,
    router: connectRouter(history),
  })(state, action)
}