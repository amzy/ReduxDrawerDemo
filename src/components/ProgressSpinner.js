/*import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';
*/

import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
} from 'react-native';

export default class ProgressSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:this.props.loading
    }
  }
  componentDidMount() {
    //Alert.alert('Spinner :' + this.props.loading);
  }
 componentWillReceiveProps(nextProps){

  if (nextProps.loading !== this.state.loading) {
    
    this.setState(() => ({ loading: nextProps.loading }))
    //Alert.alert('Spinner State :' + nextProps.loading);
  }
 }
  render() {
  
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={ this.state.loading}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
        <Progress.CircleSnail color={['red', 'green', 'blue', 'purple']} animating = {this.state.loading} hidesWhenStopped= {true} />
        </View>
      </View>
    </Modal>
  )
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

//export default ProgressSpinner;
