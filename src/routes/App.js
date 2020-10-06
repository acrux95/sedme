import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Admin from '../pages/Admin'
import Goals from '../pages/Goals'
import LearningPath from '../pages/LearningPath'
import Calendar from '../pages/Calendar'
import Profile from '../pages/Profile'

import '../assets/styles/App.scss'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/login' component={Login} />
<<<<<<< HEAD
      <Route exact path='/goals' component={Goals} />
||||||| dceb0e6
      <Route exact path='/learning' component={LearningPath} >
=======
      <Route exact path='/learning' component={LearningPath} />
>>>>>>> 28ba51845ebf46aed690e33f733978607a9b7d4a
      <Route exact path='/calendar' component={Calendar} />
      <Route exact path='/learning' component={LearningPath} />
      <Route exact path='/profile' component={Profile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default App
