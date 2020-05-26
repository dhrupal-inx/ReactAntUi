import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route,BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import Home from './Home'
import Captain from './Captain'
import BoatDetails from './BoatDetails'
import HeaderMain from './header'
import JoinNow from './JoinNow'


const routing = (
  <Router>
    <div>
    <HeaderMain />
    
      <Route path="/home" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/boatDetails" component={BoatDetails} />
      <Route path="/joinNow" component={JoinNow} />
      <Route path="/captain" component={Captain} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))