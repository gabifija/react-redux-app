import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28},
			{ name: 'Manu', age: 29},
			{ name: 'Stephanie', age: 23}
		]
	}

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 28},
				{ name: 'Manu', age: 29},
				{ name: 'Anna', age: 24}
			]
		})
	}	

  	render() {
    	return (
      		<div className="App">
        		<h1>Hi, I am React App!</h1>
        		<p>This is really working!</p>
        		<button onClick={() => this.switchNameHandler('Maximilin!!!')}>Switch Name</button>
        		<Person 
        			name={this.state.persons[0].name}
        			age={this.state.persons[0].age}
        			click={this.switchNameHandler.bind(this, 'Max')} />
        		<Person 
        			name={this.state.persons[1].name}
        			age={this.state.persons[1].age}
        			click={this.switchNameHandler.bind(this, 'Joanna')} />
        		<Person 
        			name={this.state.persons[2].name} 
        			age={this.state.persons[2].age}>My hobbies are swimming and running</Person>
      		</div>
    	);
    	// return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Hi, I am React App'));
  	}
}

export default App;
