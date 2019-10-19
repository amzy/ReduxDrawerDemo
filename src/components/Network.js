import React, { Component } from "react";
import {NetInfo, Text} from 'react-native';

export default class Network extends Component {
  componentDidMount= () => {
    const dispatchConnected = isConnected => this.props.dispatch(setIsConnected(isConnected));
    NetInfo.isConnected.fetch().then().done(() => {
    NetInfo.isConnected.addEventListener('change', dispatchConnected);
    });
  } 
  render= () =>{
    if (isConnected = true) {
      return (<Text> check </Text>)
    }else {
      return (<Text> checkF </Text>)
    }
  }
}