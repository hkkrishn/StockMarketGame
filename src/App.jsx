import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataDisplayer from './components/DataDisplayer';

class App extends Component {
  render() {
    return (
      <div>
        <DataDisplayer/>
      </div>
    );
  }
}

export default App;
