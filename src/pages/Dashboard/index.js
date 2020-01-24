import React from 'react';
import { ScrollView, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Pending from './Pending'

import { Container } from './styles';

export default function Dashboard({ navigation }) {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pending />
        <Button title='Press' onPress={() => navigation.navigate('Profile')} />
      </ScrollView>
    </Container>
  );
}

Dashboard.navigationOptions = {
  //tabBarLabel: 'Home'
  tabBarIcon: ({ tintColor }) => (
    <Icon name='equalizer' size={24} color={tintColor} />
  )
}