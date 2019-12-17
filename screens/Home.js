/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  FlatList,
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firestore from '../components/firebase';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      //noteK: '',
      dataSource: [],
      //fDate: '',
    };
  }
  static navigationOptions = {
    title: 'Ghi chú',
    headerTintColor: '#fff',
    headerLeft: null,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: '#F15E75',
    },
  };

  getData() {
    let user = firebase.auth().currentUser.uid;
    let userUID = user;

    firebase
      .database()
      .ref('/HomeyNote')
      .orderByChild('time')
      .on('value', snapshot => {
        if (snapshot.val() !== undefined && snapshot.val() !== null) {
          this.setState({
            dataSource: Object.values(snapshot.val()),
          });
        }
      });
  }

  componentDidMount() {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      this.getData();
      // The screen is focused
      // Call any action
    });
  }

  componentWillUnmount() {
    // Remove the event listener
    this.focusListener.remove();
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        Alert.alert('Đăng xuất thành công');
      })
      // eslint-disable-next-line handle-callback-err
      .catch(function(error) {
        Alert.alert('Đăng xuất thất bại');
      });
  }

  gotoTestCom = () => this.props.navigation.navigate('AddNoteNavi');
  gotoUpdateN = () => this.props.navigation.navigate('UpdateNOTE');

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={this.state.dataSource.reverse()}
            renderItem={({ item }) => (
              <View style={styles.dongFL}>
                <TouchableOpacity onPress={this.gotoUpdateN}>
                  <Text>{item.note}</Text>
                  <Text>{item.uid}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.time}
          />

          <TouchableOpacity onPress={this.logOut}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.gotoTestCom}>
            <Text style={styles.text}>Add note</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  dongFL: {
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  text: {
    fontSize: 20,
  },
});
