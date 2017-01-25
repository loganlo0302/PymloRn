import React, { Component } from 'react';
import {
  View,
  Picker,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

export default BizProfileSelectView = (props) => {
  return (
          <View>
            <Picker selectedValue = {props.selectedCompany} onValueChange = {props.updateSelectedCompany}>
              <Picker.Item label = "AAA" value = "companyA" />
              <Picker.Item label = "BBB" value = "companyB" />
            </Picker>
          
            <TouchableHighlight underlayColor = {'green'} onPress = {props.getCompany}>
              <Text style = {styles.button}>
                Select Company
              </Text>
            </TouchableHighlight>
          </View>
  );
}

const styles = StyleSheet.create ({

});
