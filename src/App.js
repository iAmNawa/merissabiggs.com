import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name: ''
  }

  changeTheName = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.changeTheName} value={this.state.name} />
        <div className="textOne">{this.state.name}</div>
      </div>
    );
  }
}

export default App;
