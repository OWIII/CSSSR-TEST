import React from 'react';
import ReactDOM from 'react-dom';
import TimerComponent from './TimerComponent';
import { Provider } from './provider/provider';
import { store } from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TimerComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);