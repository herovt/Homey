import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AddNote extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text>Hello, world!</Text>
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
