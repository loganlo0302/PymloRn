import React, { Component } from 'react'

import {
  StyleSheet,
  Text,
  Navigator,
  TouchableOpacity
} from 'react-native'

import HomeContainer from './views/HomeContainer'
import ExpensesContainer from './views/expenses/ExpensesContainer'

var _navigator


export default class AccNavigator extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
            <Navigator
            initialRoute = {{ id: 'Home', title: 'Home' }}
            renderScene = { this.renderScene }
            navigationBar = {
            <Navigator.NavigationBar
            style = { styles.navigationBar }
            routeMapper = { NavigationBarRouteMapper } />
            }
            />
            );
  }
  
  renderScene(route, navigator) {
    //var { user, company } = this.props
    
    if(route.id == 'Home') {
      return (
              <HomeContainer
              navigator = {navigator} route={route}
              //        user={user} company={company}
              />
              )
    }
    
    if(route.id == 'Expenses') {
      return (
              <ExpensesContainer
              navigator = {navigator} route={route}
              //        user={user} company={company}
              />
              )
    }
    
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
              <TouchableOpacity
              onPress = {() => { if (index > 0) { navigator.pop() } }}>
              <Text style={ styles.leftButton }>
              Back
              </Text>
              </TouchableOpacity>
              )
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.openMenu) return (
                                <TouchableOpacity
                                  onPress = { () => route.openMenu() }>
                                <Text style = { styles.rightButton }>
                                { route.rightText || 'Menu' }
                                </Text>
                                </TouchableOpacity>
                                )
      },
  Title(route, navigator, index, navState) {
    return (
            <Text style = { styles.title }>
            {route.title}
            </Text>
            )
  }
};


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








