import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import Navigator from './Navigator';
import { colors } from './utils/constants';
/*import { Container } from './Container'; */
class App extends Component {
  render() {
    return (
      
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="blue" barStyle="light-content"/> 
        
        <Provider store={store}>
        <Navigator/>
        </Provider>
      </View>
    );
  }
}
   /*<StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    <Container></Container>
   { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null } */
export default App;
