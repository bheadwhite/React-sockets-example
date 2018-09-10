import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// ==================== SOCKET IO STUFF ===================== //
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3001')


class App extends Component {
  constructor(){
    super()
    this.state={
      color: `white`
    }
  }

  setColor = () => {
    if(this.state.color !== `blue`){
    this.setState({ color: `blue` })
    } else {
      this.setState({ color: `red`})
    }
  }
  
  //SOCKET IO STUFF

  send = () => {
    //calls the change color function on server
    this.setColor()
    socket.emit('change color', this.state.color)
  }
render() {
  //this is the subscription
  socket.on('change color', (col) => {
    //recieves an emit from server
  document.body.style.backgroundColor = col //this is the template that will be on all other clients || what you want all other instances to do too.
  })
  //END SOCKET IO STUFF
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Sockets Example</h1>
        </header>
        <button onClick={
          ()=>this.send()} > Change Color </button>
      </div>
    );
  }
}

export default App;
