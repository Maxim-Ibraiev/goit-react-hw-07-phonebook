import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={store.persistor}> */}
    /
    <App />
    {/* </PersistGate> */}
  </Provider>,

  document.getElementById('root'),
);
