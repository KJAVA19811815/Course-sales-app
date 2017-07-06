import React, { Component } from 'react';
import Coursesales from './Coursesales';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var courses = [
      {name: 'IOS', price: 1000},
      {name: 'Web', price: 2000},
      {name: 'Android', price: 3000},
      {name: 'Python', price: 4000}

    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course-purchase sales</h2>
        </div>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
