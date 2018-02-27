import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Icon, Message, Button, Popup } from 'semantic-ui-react'
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
      Safely store your {MasterConfig.currency} offline. {MasterConfig.wallet} generates and reads
      encrypted wallets.
      <div style={{paddingTop:'1.5em', paddingBottom:'1em'}}>
        <Button.Group>
          <Button size={"large"} as={Link} to='/unlock'>Unlock</Button>
          <Button.Or />
          <Button size={"large"} positive as={Link} to='/start'>+New Wallet</Button>
        </Button.Group>
        {this.state.online ?
          <Popup
            trigger={<Message warning><Icon name="warning sign" />Go <u>offline</u> before using!</Message>}
            content="Protect your wallet and password from inadvertently being shared."
            inverted
          /> :
          <Popup
            trigger={<Message positive><Icon name="check circle" />No Internet detected.</Message>}
            content="Be secure. Stay offline when generating a cold wallet."
            inverted
          />}
      </div>
    </div>)
  }

}


export default Home
