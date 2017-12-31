import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			persons: [
				{ id: '1', name: 'Max', age: 28},
				{ id: '2', name: 'Manu', age: 29},
				{ id: '3', name: 'Stephanie', age: 23}
			],
			otherState: 'some other value',
			showPersons: false
		}
	}

	componentWillMount() {
		console.log('[App.js] Inside componentWillMount');
	}

	componentDidMount() {
		console.log('[App.js] Inside componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
    console.log('[update App.js]', nextProps)
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update App.js] componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[Update App.js] componentDidUpdate')
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
		let persons = null;

		if (this.state.showPersons) {
			persons = <Persons
				persons={this.state.persons}
				clicked={this.deletePersonHandler}
				changed={this.nameChangedHandler} />;
  	}

  	return (
			<div className={classes.App}>
				<button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
				<Cockpit
					appTitle={this.props.title}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.tooglePersonsHandler} />
				{persons}
			</div>
  	);
    	// return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Hi, I am React App'));
  }
}

export default App;
