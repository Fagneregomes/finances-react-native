import React from 'react';
import { ScrollView, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { registerRequest } from '../../store/modules/registers/actions'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Pending from './Pending'

import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch()
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pending />
        <Button title='Obter registros' onPress={() => dispatch(registerRequest(1))} />
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