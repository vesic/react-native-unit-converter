import { OPEN_SETTINGS, CLOSE_SETTINGS } from '../types'

const initialState = {
  homeVisible: true
}

const appReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case OPEN_SETTINGS:
      return {...state, homeVisible: false}
    case CLOSE_SETTINGS:
      return {...state, homeVisible: true}
    default:
      return state
  }
}

export default appReducer