import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am React App!</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My hobbies are running and swimming.</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Hi, I am React App'));
  }
}

export default App;
