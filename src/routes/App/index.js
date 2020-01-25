import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons'

import Dashboard from "../../pages/Dashboard";
import New from "../../pages/New";
import Profile from "../../pages/Profile";

import commonStyles from '../../styles'

const subApp = createStackNavigator({
  Dashboard,
  New
})

export const App = createBottomTabNavigator({
  Dashboard: {
    screen: subApp,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name='poll' size={24} color={tintColor} />
    }
  },
  Desejos,
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