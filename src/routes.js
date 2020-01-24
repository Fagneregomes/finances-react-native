import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import Preload from './components/Preload'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Dashboard from "./pages/Dashboard";
import New from "./pages/New";
import Profile from "./pages/Profile";

import commonStyles from './styles'

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign: createSwitchNavigator({
      Preload,
      SignIn,
      SignUp
    }),
    App: createStackNavigator({
      Dashboard,
      New
    }, {
      tabBarOptions: {
        //showLabel: false,
        activeTintColor: '#FFF',
        style: {
          backgroundColor: commonStyles.colors.primary,
        }
      }
    }),
    Nav: createStackNavigator({
      Profile
    })
  })
);

export default Routes;
