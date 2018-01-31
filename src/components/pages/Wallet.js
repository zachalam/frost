import React, { Component } from 'react'
import IOTA from 'iota.lib.js'
import QRCode from 'qrcode.react'
import { Container, TextArea, Message, Button, Tab } from 'semantic-ui-react'
var iota = new IOTA({});

class Wallet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      address: '',
      showRawSeed: false
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

    const panes = [
      { menuItem: 'Receive', render: () => {

        return (
        <div style={{paddingTop:"0.5em"}}>
          <h1>Receive IOTA</h1>
          Store your IOTA offline by sending funds to the following address.
          <QRCode size={225} value={JSON.stringify({address: this.state.address})} />
          <div>
          <TextArea key={'address'} disabled style={{width:'100%', height:75}} defaultValue={this.state.address} />
          <br /><br />
          <Button
            href={`https://iotasear.ch/hash/${this.state.address}`}
            target={'_blank'}>View Balance (Online)</Button>
          </div>
        </div>)
      }},

      { menuItem: 'Seed (Private)', render: () => {
        return (
        <div style={{paddingTop:"0.5em"}}>
          <h1>Decrypted Seed</h1>
          Import this seed into any IOTA wallet to access your funds.
          <Message negative>
            <b>DO NOT SHARE!!</b> Your IOTA can be spent by <u>ANYONE</u> with a copy of your seed.
          </Message>
          <TextArea key={'seed'} disabled style={{width:'100%', height:90}}
          value={this.state.showRawSeed ? window.wallet.seed : '#'.repeat(81)} />
          <div>
          <br />
          <Button
            onClick={() => {this.setState({showRawSeed:true})}}>I Understand, Show Seed</Button>
          </div>
        </div>)
      }}
    ]

    return (
      <Container>
        <Tab panes={panes} />
      </Container>
    )
  }

}

export default Wallet
