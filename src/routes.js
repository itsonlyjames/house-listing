import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './containers/App';
import Layout from './components/Layout';

const AppRoute = ({ component: Component, layout: Layout, title: Title, ...rest }) => {
  return (
    <Layout title={Title}>
      <Route {...rest} render={props => <Component {...props} />} />
    </Layout>
  );
};

export default (
  <Switch>
    <AppRoute exact path='/' layout={Layout} title='Home Page' component={App} />
  </Switch>
);
