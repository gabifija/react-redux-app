import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor method')
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[update Persons.js]', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] shouldComponentUpdate()', nextProps, nextState)
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Update Persons.js] componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate () {
    console.log('[Update Persons.js] componentDidUpdate')
  }

  render () {
    console.log('[Persons.js] Indide render method');

    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;
