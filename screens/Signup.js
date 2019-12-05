import * as firebase from 'firebase';
import React, { Component } from 'react';
import { Input, Icon } from 'react-native-elements';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import 'firebase/firestore';

export default class Signup extends Component {
  static navigationOptions = {
    title: 'Đăng ký',
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: '#F15E75',
    },
  };
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  goToLogin = () => this.props.navigation.navigate('Login');

  CheckInput = () => {
    const text = this.state.email;
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { email } = this.state;
    const { password } = this.state;
    const { confirmPassword } = this.state;
    if (email === '') {
      Alert.alert('Vui lòng nhập email');
    } else if (reg.test(text) === false) {
      Alert.alert('Email không hợp lệ');
    } else if (password === '') {
      Alert.alert('Vui lòng nhập mật khẩu');
    } else if (password.length < 6) {
      Alert.alert('Mật khẩu phải từ 6 ký tự trở lên');
    } else if (confirmPassword === '') {
      Alert.alert('Vui lòng nhập xác nhận mật khẩu');
    } else if (password !== confirmPassword) {
      Alert.alert('Mật khẩu không trùng nhau');
    } else {
      this.SignUp();
    }
  };

  SignUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        Alert.alert('Đăng ký thành công');
        this.goToLogin();
        this.setState({
          email: '',
          password: '',
          confirmPassword: '',
        });
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {
        Alert.alert('Đăng ký không thành công');
      });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.ImageLogo}
            source={require('../assets/note-home-dashboard-memo-512.png')}
          />
        </View>
        <View style={styles.regform}>
          <Input
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            leftIconContainerStyle={styles.iconStyle1}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.textinput}
            placeholder="Email của bạn"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            //onBlur={this.validates}
          />

          <Input
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            leftIconContainerStyle={styles.iconStyle2}
            style={styles.textinput}
            placeholder="Mật khẩu của bạn"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />

          <Input
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            leftIconContainerStyle={styles.iconStyle2}
            style={styles.textinput}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
          />

          <TouchableOpacity style={styles.button} onPress={this.CheckInput}>
            <Text style={styles.btbSignup}>Đăng ký</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Bạn đã có tài khoản ? </Text>
            <TouchableOpacity onPress={this.goToLogin}>
              <Text style={{ fontSize: 20, color: 'blue' }}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ImageLogo: {
    marginTop: 10,
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
  },
  regform: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#F15E75',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    borderBottomColor: '#F15E75',
    borderBottomWidth: 1,
    fontSize: 20,
  },
  textlabel: {
    fontSize: 24,
    marginBottom: 5,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F15E75',
    marginTop: 30,
    borderRadius: 5,
    marginBottom: 22,
  },
  btbSignup: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  iconStyle1: {
    marginRight: 10,
  },
  iconStyle2: {
    marginLeft: 18,
    marginRight: 15,
  },
});
