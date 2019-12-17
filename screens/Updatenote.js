import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class UpdateNote extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>UpdateNote</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
