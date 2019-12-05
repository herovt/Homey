//AuthNavigation.js
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: Login },
    Signup: { screen: Signup },
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Login',
  }
);

export default AuthNavigation;
