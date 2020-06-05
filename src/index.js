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
import FooterMain from './Footer';
import ConditionCheck from './ConditionCheck'

const routing = (
  <Router>
    <div>
    <HeaderMain />
    
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/boatDetails" component={BoatDetails} />
      <Route path="/joinNow" component={JoinNow} />
      <Route path="/captain" component={Captain} />
      <Route path="/conditioncheck" component={ConditionCheck} />

      <FooterMain />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))