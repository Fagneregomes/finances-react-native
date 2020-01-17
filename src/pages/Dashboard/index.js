import React from 'react';
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Pending from './Pending'

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pending />
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