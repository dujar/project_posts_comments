import React, { Component } from 'react';
import Routing from './Routing'
import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 120px;
  background-color: red;
`
const Footer = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 120px;
  background-color: blue;
`
class App extends Component {
  render() {

    return (
      <div className="App">
      <Header></Header>
      <Routing/>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
