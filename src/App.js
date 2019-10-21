import React, { Component } from 'react';
import { StatusBar, Platform, StyleSheet, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
//react-native-safe-area-view
import Navigator from './Navigator';
import { colors } from './utils/constants';
/*import { Container } from './Container'; */
/*<StatusBar backgroundColor="blue" barStyle="light-content"/> */
class App extends Component {
  render() {
    return (
    <SafeAreaView style={styles.safeArea}>
      
    <View style={{flex: 1}}>
        
        <Provider store={store}>
        <Navigator/>
        </Provider>
      </View>
    </SafeAreaView>
      
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#16a085"
  }
})
   /*<StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
    <Container></Container>
   { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null } */
export default App;
