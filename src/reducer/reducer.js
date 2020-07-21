import { CHANGE_INTERVAL, CLEAR_INTERVAL, GO_TIMER } from '../actions/actions'

export const initialState = {
  interval: 0,
  currentTime: 0,
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_INTERVAL:
      return {
        ...state,
        interval: state.interval + action.payload,
      }
    case CLEAR_INTERVAL:
      return {
        ...state,
        currentTime: 0,
      }
    case GO_TIMER:
      return {
        ...state,
        currentTime: state.currentTime + state.interval,
      }

    default:
      return state
  }
}