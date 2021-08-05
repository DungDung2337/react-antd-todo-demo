import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'containers/app';
import store from 'store/app.store';
import { Provider } from 'react-redux';
import './assets/styles/base.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
