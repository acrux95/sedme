import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  Suspense,
  lazy,
} from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalState, GlobalContext } from '../reducers/index';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Admin from '../pages/Admin';
import Goals from '../pages/Goals';
import LearningPath from '../pages/LearningPath';
import Calendar from '../pages/Calendar';
import Profile from '../pages/Profile';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/goals' component={Goals} />
      <Route exact path='/learning' component={LearningPath} />
      <Route exact path='/calendar' component={Calendar} />
      <Route exact path='/learning' component={LearningPath} />
      <Route exact path='/profile' component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App;

import '../assets/styles/App.scss';

const App = () => {
  return (
    <GlobalState>
      <AppContainer></AppContainer>
    </GlobalState>
  );
};

const AppContainer = () => {
  const [{ user }, dispatch] = useContext(GlobalContext);
  console.log(user);
  if (Object.keys(user).length > 1) {
    return (
      <BrowserRouter>
        <Suspense>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/goals' component={Goals} />
            <Route exact path='/calendar' component={Calendar} />
            <Route exact path='/learning' component={LearningPath} />
            <Route exact path='/profile' component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Suspense>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
};

export default App;

