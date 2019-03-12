import {
  SET_FROM,
  SET_TO,
  UPDATE_NUMBER,
  COMPUTE_,
  RESET,
  UPDATE_HISTORY,
  CLEAR_HISTORY,
} from '../types'

export const KM = 'KM'
export const MILES = 'MILES'
export const METER = 'METER'
export const YARD = 'YARD'

const initialState = {
  from: KM,
  to: MILES,
  result: 0,
  number: 0,
  history: [],
}

// TODO - extract ratios

const calculateReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_FROM:
      return { ...state, from: actions.payload }
    case SET_TO:
      return { ...state, to: actions.payload }
    case UPDATE_NUMBER:
      return { ...state, number: actions.payload }
    case COMPUTE_:
      if (state.from === KM && state.to === MILES) {
        return {
          ...state,
          result: state.number * 0.621371,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 0.621371
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else if (state.from === KM && state.to === METER) {
        return {
          ...state,
          result: state.number * 1000,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 1000
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else if (state.from === KM && state.to === YARD) {
        return {
          ...state,
          result: state.number * 1093.61,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 1093.61
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else if (state.from === MILES && state.to === KM) {
        return {
          ...state,
          result: state.number * 1.60934,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 1.60934
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else if (state.from === MILES && state.to === METER) {
        return {
          ...state,
          result: state.number * 1609.34,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 1609.34
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else if (state.from === MILES && state.to === YARD) {
        return {
          ...state,
          result: state.number * 1760,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 1760
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else if (state.from === METER && state.to === KM) {
        return {
          ...state,
          result: state.number * 0.001,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 0.001
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else if (state.from === METER && state.to === MILES) {
        return {
          ...state,
          result: state.number * 0.00062,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 0.00062
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else if (state.from === METER && state.to === YARD) {
        return {
          ...state,
          result: state.number * 1.0936,
          history: [
            `${state.number} ${state.from} equals to ${(
              state.number * 1.0936
            ).toFixed(2)} ${state.to}`,
            ...state.history,
          ],
          number: 0,
        }
      } else {
        return { ...state, result: 42 }
      }
    case RESET:
      return {
        ...state,
        result: 0,
      }
    case UPDATE_HISTORY:
      return {
        ...state,
        history: actions.payload,
      }
    case CLEAR_HISTORY:
      alert('History cleared')
      return {
        ...state,
        history: [],
      }
    default:
      return state
  }
}

export default calculateReducer
