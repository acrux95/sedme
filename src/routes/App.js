import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
// import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Admin from '../containers/Admin';
import Layout from '../components/Layout';

import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/login' component={Login} />
        {/* <Route exact path='/register' component={Register} /> */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
