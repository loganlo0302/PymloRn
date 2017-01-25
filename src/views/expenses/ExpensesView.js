import React, { Component } from 'react';
import {
  Picker,
  StyleSheet
} from 'react-native';

export default ExpensesView = (props) => {
  return (
          <Picker selectedValue = {props.expAB} onValueChange = {props.updateExpAB}>
          <Picker.Item label = "expA" value = "ExpAAA" />
          <Picker.Item label = "expB" value = "ExpBBB" />
          </Picker>
          );
}

const styles = StyleSheet.create ({

});


