import React from 'react';
import { createBrowserHistory } from 'history';
import ReactDOM from 'react-dom';
import App from './App';
import { createAndPersistStore } from './config/store';
const history = createBrowserHistory();
const { store, persistor } = createAndPersistStore(history);
ReactDOM.render(
  <React.StrictMode>
    <App store={store} history={history} persistor={persistor} />
  </React.StrictMode>,
  document.getElementById('root'),
);
