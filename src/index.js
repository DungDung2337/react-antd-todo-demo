import './assets/styles/base.scss';
import { render } from 'react-dom';
import { App } from 'containers/app';
import store from 'store/app.store';
import { Provider } from 'react-redux';

const targetHTMLElement = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  targetHTMLElement
);
