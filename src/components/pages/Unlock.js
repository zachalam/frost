import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sjcl from 'sjcl'

import { Container, Input, Label, Message, Transition, Button } from 'semantic-ui-react'
import wallet from '../../images/wallet.svg'

import { upload } from '../../common/file'

class Unlock extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
      decryptFail: false,
      isLoading: false,
      password: ''
    }

    this.importWallet = this.importWallet.bind(this);
    this.renderPassword = this.renderPassword.bind(this);
  }

  importWallet() {
    this.setState({decryptFail: false, isLoading: true});

    setTimeout(() => {
      try {
        // decrypt wallet and save.
        var seed = sjcl.decrypt(this.state.password, window.wallet.seed);
        window.wallet = { ...window.wallet, seed, encrypted: false }
        // redirect to wallet page.
        this.props.history.push('/wallet')
      } catch(e) {
        // wrong password.
        this.setState({decryptFail: true, isLoading: false});
      }
    },100);


    //this.props.history.push('/wallet')
  }

  renderPassword() {
    return (
      <div>
      <Input fluid
        onChange={ (e) => {this.setState({password: e.target.value})} }
        type='password'
        icon='lock'
        iconPosition='left'
        placeholder='Secure Password'
        size='large'
      />
      <Button color='blue' fluid size='large' loading={this.state.isLoading}
      onClick={() => { this.importWallet() }}>Open Wallet</Button>
      <a href="#"
        onClick={(e) => {e.preventDefault();
        this.setState({showPassword: false, decryptFail: false})}}>import another wallet</a>


      </div>
    )
  }

  render() {
    return (
      <div>
        <img src={wallet} style={{width:'100%'}} />
        <h1>Unlock Wallet</h1>
        Gain access to your wallet and funds by providing it here.
        <br /><br />

        {this.state.showPassword ?
          this.renderPassword() :
          upload('Import Wallet', ()=> { this.setState({showPassword: true}) }, 'wallet') }

        {this.state.decryptFail ? <Message warning>Invalid Decryption Password!</Message>: null}
      </div>
    )
  }

}

export default Unlock
