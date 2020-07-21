export const CHANGE_INTERVAL = 'CHANGE_INTERVAL';
export const CLEAR_INTERVAL = 'CLEAR_INTERVAL';
export const GO_TIMER = 'GO_TIMER';

export const changeIntervalAction = value => ({
  type: CHANGE_INTERVAL,
  payload: value,
});

export const clearIntervalAction = () => ({
  type: CLEAR_INTERVAL,
});

export const goTimerAction = () => ({
  type: GO_TIMER,
});