import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index';
import { Provider } from 'react-redux';
import configureStore from './store';
const initialState = {
  abc: 'd',
}
const store = configureStore(initialState);
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
);