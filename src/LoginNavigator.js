import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native'

import LoginContainer from './views/LoginContainer'
import BizProfileSelectContainer from './views/BizProfileSelectContainer'


export default class LoginNavigator extends Component {
  constructor(props){
    super(props);
    console.log('Login Navigator constructor' + this.props.user.name);
    /*
    this.state = {
      user: this.props.user,
      company: this.props.company
    };*/
  }
  
  render() {
    return (
            <Navigator
            initialRoute = {{ id: 'Login', title: 'Login' }}
            configureScene={(route, routeStack) =>
              Navigator.SceneConfigs.HorizontalSwipeJump
            }
            renderScene = { this.renderScene.bind(this) }
            />
            );
  }
  
  renderScene(route, navigator) {
    var { user, company } = this.props
    
    if(route.id == 'Login') {
      return (
              <LoginContainer
                navigator = {navigator}
                route = {route}
                user = {user}
                company = {company}
                //setState = {this.props.setState.bind(this)}
              />
              )
    }
    if(route.id == 'BizProfileSelect') {
      return (
              <BizProfileSelectContainer
                navigator = {navigator}
                route = {route}
                user = {user}
                company = {company}
                //setState = {this.props.setState.bind(this)}
              />
              )
    }
  }
}

const styles = StyleSheet.create({
                                 navigationBar: {
                                 backgroundColor: 'blue',
                                 },
                                 leftButton: {
                                 color: '#ffffff',
                                 margin: 10,
                                 fontSize: 17,
                                 },
                                 title: {
                                 paddingVertical: 10,
                                 color: '#ffffff',
                                 justifyContent: 'center',
                                 fontSize: 18
                                 },
                                 rightButton: {
                                 color: 'white',
                                 margin: 10,
                                 fontSize: 16
                                 }
                                 })
