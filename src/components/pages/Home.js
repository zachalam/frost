import React from 'react'
import { Link } from 'react-router-dom'

import { Transition, Button } from 'semantic-ui-react'
import vault from '../../images/vault.svg'
import MasterConfig from '../../config/Master'

const Home = () => (
  <div>
    <img src={vault} style={{width:'100%'}} alt={'IOTA Vault'} />
    <h1>Hello There!</h1>
    Safely store coins offline. {MasterConfig.wallet} generates and reads
    encrypted {MasterConfig.currency} seeds.
    <div style={{paddingTop:'1em', paddingBottom:'1em'}}>
      <Button.Group>
        <Button size={"large"} as={Link} to='/unlock'>Open Wallet</Button>
        <Button.Or />
        <Button size={"large"} positive as={Link} to='/start'>New Wallet</Button>
      </Button.Group>
    </div>
  </div>
)

export default Home
