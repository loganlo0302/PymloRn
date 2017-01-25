import React, { Component } from 'react';
import ExpensesView from './ExpensesView';

export default class ExpensesContainer extends Component {
  
  constructor() {
    super();
    this.state = {expAB: ''};
  }
  
  updateExpAB = (exp) => {
    this.setState({expAB: exp});
  }
  
  
  render() {
    return (
            <ExpensesView
              expAB = {this.state.expAB}
              updateExpAB = {this.updateExpAB}
            />
            );
  }
}
