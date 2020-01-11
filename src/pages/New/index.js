import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

// import { Container } from './styles';

export default function New() {
  return (
    <View>
      <Text>New</Text>
    </View>
  );
}


New.navigationOptions = {
  tabBarLabel: 'Registrar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name='edit' size={24} color={tintColor} />
  )
}