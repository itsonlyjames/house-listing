import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import houseListing from './reducers';
import routes from './routes';

let store = createStore(houseListing);

describe('<App />', () => {
  it('renders app without crashing', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Router>{routes}</Router>
      </Provider>,
      document.createElement('root')
    );
  });
});
