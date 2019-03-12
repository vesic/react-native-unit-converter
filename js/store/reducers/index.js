import { combineReducers } from 'redux'
import appReducer from './appReducer'
import calculateReducer from './calculateReducer'

export default combineReducers({
  appReducer,
  calculateReducer,
})
