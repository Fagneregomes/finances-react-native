import React from 'react';
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Resume from './Resume'

import { Container } from './styles';

export default function Dashboard({ navigation }) {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Resume />
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