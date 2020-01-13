import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-paper'

import firebase from '../../services/firebaseConnection'

export default function Profile() {
  return (
    <View>
      <Button mode='contained' onPress={() => firebase.auth().signOut()}>Sair</Button>
    </View>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name='account-circle' size={24} color={tintColor} />
  )
}