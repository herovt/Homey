/* eslint-disable no-unused-vars */
import React from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

export default class CheckAuthen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Home' : 'Login');
    });
  }

  render() {
    return <View />;
  }
}
