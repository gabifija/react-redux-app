import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
	state = {
		persons: [
			{ id: '1', name: 'Max', age: 28},
			{ id: '2', name: 'Manu', age: 29},
			{ id: '3', name: 'Stephanie', age: 23}
		],
		otherState: 'some other value',
		showPersons: false
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

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	}

	tooglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

  render() {
  	const style = {
  		backgroundColor: 'green',
  		font: 'inherit',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer',
			':hover': {
				backgroundColor: 'lightgreen',
				color: 'black'
			}
  	};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
	    	<div>
	    		{this.state.persons.map((person, index) => {
	    			return <Person
	    				click={() => this.deletePersonHandler(index)}
	    				name={person.name}
	    				age={person.age}
							key={person.id}
							changed={(event) => this.nameChangedHandler(event, person.id)} />
	    		})}
				</div>
  		);

			style.backgroundColor = 'red';
			style[':hover'] = {
				backgroundColor: 'lightcoral',
				color: 'black'
			}
  	}

		let classes = [];

		if (this.state.persons.length <= 2) {
			classes.push('red'); // classes = ['red']
		}

		if (this.state.persons.length <= 1) {
			classes.push('bold'); // classes = ['red', 'bold']
		}

  	return (
    	<div className="App">
      	<h1>Hi, I am React App!</h1>
      	<p className={classes.join(' ')}>This is really working!</p>
      	<button
      		style={style}
      		onClick={this.tooglePersonsHandler}>Toogle Persons</button>
    		{persons}
    	</div>
  	);
    	// return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Hi, I am React App'));
  }
}

export default Radium(App);
