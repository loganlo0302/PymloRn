import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'
import AccNavigator from './src/AccNavigator'
import LoginNavigator from './src/LoginNavigator'

class PymloRN extends Component {
  
  
  constructor(props) {
    super(props);
    
    this.state = {
      //TODO: JSON DOC, use {}
      user: {name: 'Jessica'},
      company: {name: 'Alias'},
      language: 'en'
    };
  }
  
  componentDidMount() {
  }
  
  render() {
    var { user, company } = this.state
    console.log('Render' + user.name);

    /*
    if (user && company )
      return (
              <AccNavigator
              user = {user}
              company = {company}
              //setState = {this.setState.bind(this)}
              //getState = {this.getState.bind(this)}
              />
              )
      else {*/
        return (
                <LoginNavigator
                user = {user}
                company = {company}
                setState = {this.setState.bind(this)}
                />
        )
      //}
  }
}

AppRegistry.registerComponent('PymloRN', () => PymloRN);
