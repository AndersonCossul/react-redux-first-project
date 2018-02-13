import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'
import Person from '../components/Person/Person'
import AddPerson from '../components/AddPerson/AddPerson'

class Persons extends Component {
  personDeletedHandler = (personId) => {
    this.setState( ( prevState ) => {
      return { persons: prevState.persons.filter(person => person.id !== personId)}
    } )
  }

  render () {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.personDeletedHandler(person.id)}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPerson     : () => dispatch({type: actions.ADD_PERSON}),
    onDeletePerson  : () => dispatch({type: actions.DELETE_PERSON})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
