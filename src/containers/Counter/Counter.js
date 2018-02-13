import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {
            this.props.results.map(result => (
              <li key={result.id} onClick={this.props.onDeleteResult}>{result.value}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    results: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT_COUNTER'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT_COUNTER'}),
    onAddCounter: () => dispatch({type: 'ADD_COUNTER', value: 5}),
    onSubtractCounter: () => dispatch({type: 'SUBTRACT_COUNTER', value: 5}),
    onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
    onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
