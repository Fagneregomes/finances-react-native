import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons'


import Dashboard from "../../pages/Dashboard";
import New from "../../pages/New";

import Profile from "../../pages/Profile";
import Todo from "../../pages/Todo";

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
  Todo: {
    screen: Todo,
    navigationOptions: ({
      title: 'Lista de Desejos',
      tabBarIcon: ({ tintColor }) => <Icon name='local-atm' size={24} color={tintColor} />
    })
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