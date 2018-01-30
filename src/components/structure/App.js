import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Routes from './Routes';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import logo from '../../images/frost.png';


class App extends Component {
  render() {
    return (

      <div className='login-form'>
      <Grid
        textAlign='center'
        style={{ height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 350 }}>
          <Link to={"/"}><img src={logo} className="App-logo" style={{width:"100%"}} /></Link>
            <Segment stacked>
                <Routes />
            </Segment>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>


    );
  }
}

export default App;
