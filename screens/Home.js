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
      email: '',
      fullname: '',
      dataSource: [],
    };
  }
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#fff',
    headerLeft: null,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: '#F15E75',
    },
  };

  componentDidMount() {
    let user = firebase.auth().currentUser;
    let userUID = user.uid;

    let dataArray = [];
    firestore
      .collection('HomeyNote')
      .where('uid', '==', userUID)
      .get()
      .then(QueryDocumentSnapshot => {
        QueryDocumentSnapshot.forEach(doc => {
          dataArray.push(doc.data());
          this.setState({ dataSource: dataArray });
        });
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error);
      });
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={styles.dongFL}>
                <Text>{item.note}</Text>
              </View>
            )}
            keyExtractor={item => item.docid}
          />

          <TouchableOpacity onPress={this.logOut}>
            <Text style={styles.text}>Logout</Text>
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
