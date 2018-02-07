import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Message, Button } from 'semantic-ui-react'
import vault from '../../images/vault.svg'
import MasterConfig from '../../config/Master'

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      online: window.navigator.onLine
    }

    this.setOnline = this.setOnline.bind(this);
    this.setOffline = this.setOffline.bind(this);
  }

  componentWillMount() {
    window.addEventListener('offline', this.setOffline);
    window.addEventListener('online', this.setOnline);

  }

  setOnline() { this.setState({online: true}); }
  setOffline() { this.setState({online: false}); }


  render() {
   return (<div>
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
        {this.state.online ? <Message warning><b>Be Safe!</b> Go offline when using.</Message> : null}
      </div>
    </div>)
  }

}


export default Home
