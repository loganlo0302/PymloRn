import React, { Component } from 'react';
import {
  View
} from 'react-native'

import HomeView from './HomeView';

export default class HomeContainer extends Component {
  
  constructor() {
    super();
  }

  render() {
    return (
        <View>
            <HomeView goToExpenses = {this.goToExpenses}/>
        </View>
    )
  }
  
  openMenu = () =>{
    alert("Menu button pressed!")
  }
  
  goToExpenses = () => {
    this.props.navigator.push({
        name: 'Expenses',
        title: 'Expenses',
        openMenu: this.openMenu
    });
  }
}
