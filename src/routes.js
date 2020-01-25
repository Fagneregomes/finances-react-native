import React from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Preload from './components/Preload'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Dashboard from "./pages/Dashboard";
import New from "./pages/New";
import Profile from "./pages/Profile";

import commonStyles from './styles'

const Sign = createSwitchNavigator({
  Preload,
  SignIn,
  SignUp
})

const subApp = createStackNavigator({
  Dashboard,
  New
})

const App = createBottomTabNavigator({
  Dashboard: {
    screen: subApp,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={24} color={tintColor} />
    }
  },
  Profile: {
    screen: Profile
  }
}, {
  tabBarOptions: {
    activeTintColor: commonStyles.colors.primary,
    style: {
      backgroundColor: '#FFF',
    }
  }
})

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign,
    App
  })
);

export default Routes;
