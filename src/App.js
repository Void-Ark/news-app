import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


//const API_KEY = "35a79ed2b6b8482e8aec24305ad12652";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}

