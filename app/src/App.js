import React, { Component } from 'react';
import Header from './components/Header'
import MainLayout from './components/MainLayout'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <MainLayout></MainLayout>
      </div>
    );
  }
}

export default App;
