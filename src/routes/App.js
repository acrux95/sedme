import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Admin from '../pages/Admin'
import LearningPath from '../pages/LearningPath'
import Calendar from '../pages/Calendar'
import Profile from '../containers/Profile'

import '../assets/styles/App.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/learning' component={LearningPath} >
      <Route exact path='/calendar' component={Calendar} />
      <Route exact path='/profile' component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
