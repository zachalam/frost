import React from 'react'

import { TextArea } from 'semantic-ui-react'
import qrdonate from '../../images/donation.png'
import MasterConfig from '../../config/Master'

const Donate = () => (
  <div>
    <img src={qrdonate} style={{width:'100%'}} alt={'QR Donation Code'} />
    <h1>Donate IOTA</h1>
    Help support the development of {MasterConfig.wallet} by
    contributing to our cold wallet!
    <div style={{paddingTop:'1em', paddingBottom:'1em'}}>

    <TextArea key={'donation'} disabled style={{width:'100%', height:75, border:0}}
    value={'XQPVRLTJUVVIBWSFYEVSNDCJRCOOHIJKSYMHFYMWAZMLRGGKMUBLSPNNMQSUHKGL9BJGWWTLQATUQHLDZTLWJGZYUY'} />

    </div>
  </div>
)

export default Donate
