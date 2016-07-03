import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { fetchGundams } from './actions/index';
import reducers from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(fetchGundams());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);