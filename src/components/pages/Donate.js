import React from 'react'
import { Link } from 'react-router-dom'

import { TextArea, Button } from 'semantic-ui-react'
import qrdonate from '../../images/donation.png'
import MasterConfig from '../../config/Master'

const Donate = () => (
  <div>
    <img src={qrdonate} style={{width:'100%'}} alt={'QR Donation Code'} />
    <h1>Donations</h1>
    Help support and encourage the development of {MasterConfig.wallet} by
    contributing to our own encrypted cold storage wallet!
    <div style={{paddingTop:'1em', paddingBottom:'1em'}}>

    <TextArea key={'donation'} disabled style={{width:'100%', height:75}}>XQPVRLTJUVVIBWSFYEVSNDCJRCOOHIJKSYMHFYMWAZMLRGGKMUBLSPNNMQSUHKGL9BJGWWTLQATUQHLDZTLWJGZYUY</TextArea>

    </div>
  </div>
)

export default Donate
