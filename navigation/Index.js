import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import CheckAuthen from '../screens/CheckAuthen';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

const SwitchNavigator = createSwitchNavigator(
  {
    CheckAuthen,
    Auth: AuthNavigation,
    App: AppNavigation,
  },
  {
    initialRouteName: 'CheckAuthen',
  }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
