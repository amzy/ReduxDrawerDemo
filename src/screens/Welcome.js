import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import Button from '../components/Button'
export default class WelcomeScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to WelcomeScreen
          </Text>
          <Button text="Home" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#455A64',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});