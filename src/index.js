import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import houseListing from './reducers';
import routes from './routes';

const persistedState = localStorage.getItem('savedProperties') ? JSON.parse(localStorage.getItem('savedProperties')) : {}

const store = createStore(houseListing, persistedState);

store.subscribe(()=>{
  localStorage.setItem('savedProperties', JSON.stringify(store.getState()))
})

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
