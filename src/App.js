import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import IdeasContainer from './components/ideas/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <IdeasContainer/>
      </div>
    );
  }
}

export default App;
