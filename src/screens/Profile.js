import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  View
} from 'react-native';
import { Card, Button, Text } from "react-native-elements";

export default class ProfileScreen extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#16a085", paddingVertical: 20 }}>
    <Card title="Amzad Khan">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>AK</Text>
      </View>
      <Button
        backgroundColor="#03A9F4"
        title="SIGN OUT"
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
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