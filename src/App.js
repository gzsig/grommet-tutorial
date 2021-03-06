import React, { Component } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext,
} from 'grommet';

import { FormClose, Menu } from 'grommet-icons'
const logo = require('./images/banner.jpg');

const theme = {
  global: {
    colors: {
      brand: '#7FCA75',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};


const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
          <ResponsiveContext.Consumer>
            {size => (
        <Box fill>

          <AppBar>
            <Heading level='3' margin='none'>Melon</Heading>
            <Button 
              icon={<Menu />}
              onClick={() => this.setState(prevState => ({ showSidebar: !prevState.showSidebar }))} />
          </AppBar>
          <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
            <Box flex align='center' justify='center'>
              <img  className='banner' src={logo} alt='banner'/>
              App Body
            </Box>
            {(!showSidebar || size !== 'small') ? (
            <Collapsible direction='horizontal' open={showSidebar}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
              </Box>
              </Collapsible>
            ): (
              <Layer>
                <Box
                  background='light-2'
                  tag='header'
                  justify='end'
                  align='center'
                  direction='row'
                >
                  <Button
                    icon={<FormClose />}
                    onClick={() => this.setState({ showSidebar: false})}
                    />
                </Box>
                <Box 
                  fill
                  background='light-2'
                  align='center'
                  justify='center'
                >
                  sidebar
                </Box>
              </Layer>
            )}
          </Box>
        </Box>
        )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default App;
