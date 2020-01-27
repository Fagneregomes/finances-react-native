import React from 'react';
import { ScrollView } from 'react-native'
import ButtonFlutuante from '../../components/ButtonFlutuante'
import moment from 'moment'
import 'moment/locale/pt-br'

import Icon from 'react-native-vector-icons/MaterialIcons'
import Pending from './Pending'
import commonStyled from '../../styles/index'

import { Container, BoxHeader, TextHeader, BoxRefresh, styles } from './styles';

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
    <BoxRefresh>
      <Icon name='loop' onPress={() => { alert('teste') }} size={30} color={commonStyled.colors.secundary} />
    </BoxRefresh>
  )
}

export default function Dashboard({ navigation }) {
  const iconsFAB = [
    {
      icon: 'plus',
      label: 'Adicionar transação',
      onPress: () => navigation.navigate('New'),
      style: styles.stylesFAB
    },
  ]

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pending navigation={navigation} />
      </ScrollView>
      <ButtonFlutuante icons={iconsFAB} />
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerTitle: Header,
  headerRight: Refresh,
}