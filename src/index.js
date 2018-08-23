import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import imagensStore from './stores/imagensStore';
import userStore from './stores/userStore';

const stores = {
  imagensStore,
  userStore
};

window._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
