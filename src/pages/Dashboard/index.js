import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import firebase from '../../services/firebaseConnection'
// import { Container } from './styles';

export default function Dashboard() {
  return (
    <View>
      <TouchableOpacity onPress={() => firebase.auth().signOut()}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
