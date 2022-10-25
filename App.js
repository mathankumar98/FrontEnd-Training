import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Greet from './components/Greet.js' 

class App extends Component{
  render() {
  return ( 
    <div className="App">
     <Greet />
    </div>
  );
}
}
export default App;
