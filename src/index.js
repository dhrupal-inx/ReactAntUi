import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import Home from './Home'
import Contact from './Contact'
import BoatDetails from './BoatDetails'
import HeaderMain from './header'


const routing = (
  <Router>
    <div>
    <HeaderMain />
    
      <Route path="/home" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/boatDetails" component={BoatDetails} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))