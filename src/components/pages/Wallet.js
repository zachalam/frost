import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sjcl from 'sjcl'
import IOTA from 'iota.lib.js'
import QRCode from 'qrcode.react'

import { Container, Input, TextArea, Label, Message, Transition, Button } from 'semantic-ui-react'
import locked from '../../images/locked.svg'

import { upload } from '../../common/file'

var iota = new IOTA({});

class Wallet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address: ''
    }

    this.storeAddress = this.storeAddress.bind(this);

  }

  componentWillMount() {
    if((window.wallet === undefined) || window.wallet.encrypted) {
      // wallet unavailable - back to home.
      this.props.history.push('/')
    } else {
      // wallet availabe, generate an address.
      iota.api.getNewAddress(
        window.wallet.seed,
        { 'checksum': true, 'total': 1 },
        this.storeAddress
      );
    }
  }

  storeAddress(e, address) {
    if (!e) {
        // save address to state.
        this.setState({address: address[0]});
    } else {
        // could not generate an address.
    }
  }

  render() {
    console.log("this state");
    console.log(this.state);
    return (
      <Container>
        <h1>Receive IOTA</h1>
        Store your IOTA offline in a cold storage wallet by sending funds to the following address.
        <QRCode size={225} value={JSON.stringify({address: this.state.address})} />
        <div>
        <TextArea disabled style={{width:'100%', height:75}}>{this.state.address}</TextArea>
        <br /><br />
        <Button
          href={`https://iotasear.ch/hash/${this.state.address}`}
          target={'_blank'}>View Balance</Button>
        </div>
      </Container>
    )
  }

}

export default Wallet
