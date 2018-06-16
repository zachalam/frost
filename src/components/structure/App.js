import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Segment, Icon } from 'semantic-ui-react'

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
          <Link to={"/"}><img src={logo} className="App-logo" alt="Frost Logo" style={{width:"100%"}} /></Link>
            <Segment stacked={true} style={{padding:'2em'}}>
                <Routes />
            </Segment>
          <div>
            <a href={`${MasterConfig.tangleLookup}/${MasterConfig.donationAddress}`} target="_blank">
              <Icon name="heart" />Donate
            </a>
            &nbsp; &nbsp;
            <a href={MasterConfig.github} target="_blank"><Icon name="github" />
              GitHub
            </a>
          </div>
        </Grid.Column>
      </Grid>
    </div>


    );
  }
}

export default App;
