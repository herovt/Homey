/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import firestore from '../components/firebase';
import 'firebase/firestore';

export default class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userUID: '',
      note: '',
      fDate: '',
    };
  }

  componentDidMount() {
    let user = firebase.auth().currentUser;
    this.setState({ userUID: user.uid });
    this.getTime();
  }

  getTime() {
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    this.setState({
      //Setting the value of the date time
      fDate: date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
      //fDate: year + '' + month + '' + date + '' + hours + '' + min + '' + sec,
    });
  }

  gotoHome = () => this.props.navigation.navigate('Home');

  writeData = () => {
    if (this.state.note === '') {
      this.gotoHome();
    } else {
      firebase
        .database()
        .ref('/HomeyNote')
        .push({
          uid: this.state.userUID,
          note: this.state.note,
          time: this.state.fDate,
        });
    }
    this.gotoHome();
  };

  render() {
    return (
      <View style={styles.body}>
        <Text>{this.state.userUID}</Text>
        <TextInput
          style={styles.textinput}
          multiline={true}
          onChangeText={note => this.setState({ note })}
          value={this.state.note}
        />
        <TouchableOpacity onPress={this.writeData}>
          <Text style={{ fontSize: 20, color: 'blue' }}>thêm note</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'white',
  },
  textinput: {
    height: 500,
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
