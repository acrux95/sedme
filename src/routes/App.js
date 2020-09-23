import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
// import Register from '../containers/Register';
import NotFound from '../containers/NotFound'
import Admin from '../containers/Admin'
import LearningPath from '../containers/LearningPath'
import Profile from '../containers/Profile'

import '../assets/styles/App.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/learning' component={LearningPath} />
      <Route exact path='/Profile' component={Profile} />
      {/* <Route exact path='/register' component={Register} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
