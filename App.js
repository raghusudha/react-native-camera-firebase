import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import RouterConfig from './src/Routes/index';



export default class App extends Component {
  render() {
      return <RouterConfig />

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
