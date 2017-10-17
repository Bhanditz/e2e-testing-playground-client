import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Jo"
    };
  }

  componentDidMount(){

    axios.get('http://localhost:3001/api')
      .then( (response) => {
        this.setState(response.data);
      })
      .catch( (error) =>{
        console.log(error);
      });

  }

  render() {
    const {name} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome!</h1>
          <span id="name">{name}</span>  
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
