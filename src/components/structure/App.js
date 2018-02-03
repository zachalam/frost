import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'

import Routes from './Routes'
import logo from '../../images/frost.png'
import MasterConfig from '../../config/Master'

class App extends Component {
  render() {
    return (

      <div>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{maxWidth: 350}}>
          <Link to={"/"}><img src={logo} className="App-logo" style={{width:"100%"}} /></Link>
            <Segment stacked={true} style={{padding:'2em'}}>
                <Routes />
            </Segment>
          <Message>
            <Link to={'/donate'}><Icon name="check circle" />Donate</Link>
            &nbsp; &nbsp;
            <Link to={"#"}><Icon name="lock" />Security</Link>
            &nbsp; &nbsp;
            <a href={MasterConfig.github} target="_blank"><Icon name="github" />GitHub</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>


    );
  }
}

export default App;
