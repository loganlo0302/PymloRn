import React, { Component } from 'react'
import LoginView from './LoginView'

export default class LoginContainer extends Component {
  
  constructor(props) {
    super(props);
    console.log('Login Container constructor' + this.props.user);
  }
  
  getUser = () => {
    //TODO: GET USER
    //this.props.setState({user: Jones});
    console.log('Login Set User' + this.props.user);
    
    this.props.navigator.push({
        id: 'BizProfileSelect',
        title: 'BizProfileSelect',
        openMenu: this.openMenu
    });
  }
  
  render() {
    return (
            <LoginView
              getUser = {this.getUser}/>
    );
  }
}
