import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

// import { Container } from './styles';

export default function Profile() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name='account-circle' size={24} color={tintColor} />
  )
}