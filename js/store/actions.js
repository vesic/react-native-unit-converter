import {
  OPEN_SETTINGS,
  CLOSE_SETTINGS,
  SET_FROM,
  SET_TO,
  UPDATE_NUMBER,
  COMPUTE_,
  RESET,
  CLEAR_HISTORY
} from './types'

export const openSettings = payload => ({
  type: OPEN_SETTINGS,
  payload,
})

export const closeSettings = payload => ({
  type: CLOSE_SETTINGS,
  payload,
})

export const setFrom = payload => ({
  type: SET_FROM,
  payload,
})

export const setTo = payload => ({
  type: SET_TO,
  payload,
})

export const updateNumber = payload => ({
  type: UPDATE_NUMBER,
  payload,
})

export const compute = payload => ({
  type: COMPUTE_,
  payload,
})

export const resetNumber = () => ({
  type: RESET,
})

export const clearHistory = () => ({
  type: CLEAR_HISTORY
})
