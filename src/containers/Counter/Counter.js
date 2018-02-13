import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

import * as actionTypes from '../../store/actions'

class Counter extends Component {
  render () {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
        <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
        <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
        <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Result</button>
        <ul>
          {
            this.props.results.map(result => (
              <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
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
    onIncrementCounter: ()      => dispatch({type: actionTypes.INCREMENT_COUNTER}),
    onDecrementCounter: ()      => dispatch({type: actionTypes.DECREMENT_COUNTER}),
    onAddCounter      : (value) => dispatch({type: actionTypes.ADD_COUNTER, value: value}),
    onSubtractCounter : (value) => dispatch({type: actionTypes.SUBTRACT_COUNTER, value: value}),
    onStoreResult     : ()      => dispatch({type: actionTypes.STORE_RESULT}),
    onDeleteResult    : (id)    => dispatch({type: actionTypes.DELETE_RESULT, id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
