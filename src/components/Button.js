import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { colors } from '../utils/constants';

class Button extends Component {
  render() {
    const { text, onPress } = this.props;

    return (
      <TouchableOpacity style={styles.container}
        underlayColor={colors.PINK_200}
        onPress={onPress}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 40,
    backgroundColor:'#F8BBD0',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default (Button);
