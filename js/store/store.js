import rootReducer from './reducers'
import { createStore } from 'redux'
import { saveState, getState } from '../ParsistService'
import { UPDATE_HISTORY } from './types'

getState().then(res => {
  store.dispatch({
    type: UPDATE_HISTORY,
    payload: res.calculateReducer.history,
  })
})
.catch(e => {
  // console.warn(e)
})

let store = createStore(rootReducer)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
