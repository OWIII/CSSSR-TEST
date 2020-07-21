import { reducer } from '../reducer/reducer';

const createStore = (reducer, initialState) => {
  let currentState = initialState;
  let currentReducer = reducer;
  const listeners = [];

  const getState = () => currentState;

  const dispatch = action => {
    currentState = currentReducer(currentState, action);
    listeners.forEach(listener => listener());
    return action;
  }

  const subscribe = listener => listeners.push(listener);

  const unsubscribe = (listener) => {
    const index = listeners.indexOf(listener);
    listeners.slice(index, 1);
  }

  return { getState, dispatch, subscribe, unsubscribe }
}

const initialState = {
  interval: 0,
  currentTime: 0,
};

export const store = createStore(reducer, initialState);