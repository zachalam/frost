import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from 'semantic-ui-react'
import download from '../../images/download.svg';

const Done = () => (
  <div>
    <img src={download} alt="Wallet Downloaded" style={{width:'100%'}} />
    <h1>Wallet Saved!</h1>
    An encrypted wallet was just saved to your device. Keep it safe!
    <br /><br />
    <Button size={"large"} as={Link} to='/unlock'>Unlock Wallet</Button>

  </div>
)

export default Done
