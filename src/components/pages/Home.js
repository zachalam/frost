import React from 'react'
import { Link } from 'react-router-dom'

import { Transition, Button } from 'semantic-ui-react'

const Home = () => (
  <div>
    <Button.Group>
      <Button size={"large"} as={Link} to='/unlock'>Open Wallet</Button>
      <Button.Or />
      <Button size={"large"} positive as={Link} to='/start'>New Wallet</Button>
    </Button.Group>
  </div>
)

export default Home
