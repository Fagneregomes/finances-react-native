import React from 'react';
import { ScrollView, Button } from 'react-native'
import moment from 'moment'
import 'moment/locale/pt-br'


import Icon from 'react-native-vector-icons/MaterialIcons'
import Pending from './Pending'
import commonStyled from '../../styles/index'

import { Container, BoxHeader, TextHeader } from './styles';

function Header() {
  return (
    <BoxHeader>
      <TextHeader>{moment(new Date()).locale('pt-br').format('MMMM')}</TextHeader>
      <Icon name='expand-more' size={24} color={commonStyled.colors.secundary} />
    </BoxHeader>
  )
}

function Refresh() {
  return (
    <Icon name='loop' size={24} color={commonStyled.colors.secundary} />
  )
}

export default function Dashboard({ navigation }) {
  console.tron.log(navigation)
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
  headerTitle: () => <Header />,

}