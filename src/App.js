import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{ name: 'Max', age: 28},
			{ name: 'Manu', age: 29},
			{ name: 'Stephanie', age: 23}
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

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Max', age: 28},
				{ name: event.target.value, age: 29},
				{ name: 'Stephanie', age: 26}
			]
		})
	}

	tooglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

  	render() {
  		const style = {
  			backgroundColor: 'white',
  			font: 'inherit',
  			border: '1px solid blue',
  			padding: '8px',
  			cursor: 'pointer'
  		};

    	return (
      		<div className="App">
        		<h1>Hi, I am React App!</h1>
        		<p>This is really working!</p>
        		<button 
        			style={style}
        			onClick={this.tooglePersonsHandler}>Switch Name</button>
        		{ 
        			this.state.showPersons === true ?
        				<div>
        					<Person 
        						name={this.state.persons[0].name}
        						age={this.state.persons[0].age}
        						click={this.switchNameHandler.bind(this, 'Max')} />
        					<Person 
        						name={this.state.persons[1].name}
        						age={this.state.persons[1].age}
        						click={this.switchNameHandler.bind(this, 'Joanna')}
        						changed={this.nameChangedHandler} />
        					<Person 
        						name={this.state.persons[2].name} 
        						age={this.state.persons[2].age}>My hobbies are swimming and running</Person>
        				</div> : null
        		}
      		</div>
    	);
    	// return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'Hi, I am React App'));
  	}
}

export default App;
