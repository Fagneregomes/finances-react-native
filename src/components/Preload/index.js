import React, { useEffect } from 'react';
import firebase from '../../services/firebaseConnection'
import { View, Text, ActivityIndicator } from 'react-native';

import { Background, Container } from './styles'

export default function Preload({ navigation }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Dashboard')
      } else {
        navigation.navigate({ routeName: 'SignIn' })
      }
    })
  }, [])

  return (
    <Background>
      <Container>
        <ActivityIndicator size={50} color='#FFF' />
      </Container>
    </Background>
  );
}
