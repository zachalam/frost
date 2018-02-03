import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Start from '../pages/Start'
import Done from '../pages/Done'
import Unlock from '../pages/Unlock'
import Wallet from '../pages/Wallet'
import Donate from '../pages/Donate'

// The Routes component renders one of the routes
const Routes = () => (
  <main>
    <Switch basename="frost">
      <Route exact path='/' component={Home}/>
      <Route exact path='/start' component={Start}/>
      <Route exact path='/done' component={Done}/>

      <Route exact path='/unlock' component={Unlock}/>
      <Route exact path='/wallet' component={Wallet}/>

      <Route exact path='/donate' component={Donate}/>

    </Switch>
  </main>
)

export default Routes
