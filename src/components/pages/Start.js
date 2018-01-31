import React, { Component } from 'react'
import sjcl from 'sjcl'

import {
  Container,
  Input,
  Button
} from 'semantic-ui-react'
import stretch from '../../images/stretch.svg'

import { write } from '../../common/file'
import MasterConfig from '../../config/Master'

class Start extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      seed: '',
      password: ''
    }

    this.seededListener = this.seededListener.bind(this);
    this.progressListener = this.progressListener.bind(this);

    this.renderPassword = this.renderPassword.bind(this);
    this.renderProgress = this.renderProgress.bind(this);
    this.exportWallet = this.exportWallet.bind(this);

  }

  componentWillMount() {
    let gen = new sjcl.prng(10);
		gen.startCollectors();
		sjcl.random.addEventListener("seeded", this.seededListener);
		sjcl.random.addEventListener("progress", this.progressListener);
  }

  seededListener() {
    // we're ready to build the seed.
    let seed = "";
    for(;seed.length < 81;seed += sjcl.codec.base64.fromBits(sjcl.random.randomWords(33, 10)).replace(/[^A-Z9]+/g, '')) {};
    this.setState({ seed: seed.substring(0,81) });
  }

  progressListener(p) {
    // store updates to progress percentage.
    this.setState({progress: (p*100).toFixed(2)});
  }

  // ----------------------

  exportWallet() {
    console.log("exporting wallet");
    var payload = {
      wallet: MasterConfig.wallet,
      version: MasterConfig.version,
      currency: MasterConfig.currency,
      seed: sjcl.encrypt(this.state.password, this.state.seed),
      encrypted: true
    }
    // save wallet.
    write(JSON.stringify(payload), "text/plain", `${MasterConfig.wallet}-wallet.json`);
    // redirect to done page.
    this.props.history.push('/done')
  }

  renderPassword() {
    return (
      <div>
        Great! Now enter a <strong>{MasterConfig.passLength}+ character</strong> password to encrypt your wallet.
        <br /><br />
        <Input fluid
          onChange={ (e) => {this.setState({password: e.target.value})} }
          type='password'
          icon='lock'
          iconPosition='left'
          placeholder='Secure Password'
          size='large'
        />
        <Button color='blue' fluid size='large'
        onClick={() => { this.exportWallet() }}
        disabled={!Boolean(this.state.password.length >= MasterConfig.passLength)}>Save Wallet</Button>
      </div>
    )
  }

  renderProgress() {
    return (
      <div>
        Move your mouse OR finger across the screen in random spots.
        <br /><br />
        <h1>{`${this.state.progress}%`}</h1>
      </div>
    )
  }

  render() {
    return (
      <Container>
        <img src={stretch} style={{width:'100%'}} alt={'IOTA Vault'} />
        <h1>New Wallet</h1>
        {Boolean(this.state.progress < 100) ? this.renderProgress() : this.renderPassword()}
      </Container>
    );
  }
}


export default Start
