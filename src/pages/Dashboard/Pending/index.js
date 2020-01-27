import React from 'react'
import { Card, TouchableRipple } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

import { styles, Container, ViewMore } from './styles'

// Custon components
import ItemList from '../../../components/ItemList'

export default function Pending({ navigation }) {
  const registers = useSelector(state => state.registers);
  return (
    <Container>
      <Card elevation={3}>
        <Card.Title
          title="Contas pendentes"
          titleStyle={styles.titleStyle}
        />
        <Card.Content>
          {registers.data.map((data) => <ItemList key={data.id} {...data} />)}
        </Card.Content>
        <ViewMore onPress={() => navigation.navigate('New')}>Visualizar tudo</ViewMore>
      </Card>
    </Container>
  );
}