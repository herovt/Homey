//AppNavigation.js
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import UpdateNote from '../screens/Updatenote';
import AddNote from '../screens/Addnote';

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    UpdateNOTE: { screen: UpdateNote },
    AddNoteNavi: { screen: AddNote },
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigation;
