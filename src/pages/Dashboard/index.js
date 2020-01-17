import React from 'react';
import { ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Pending from './Pending'

import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
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