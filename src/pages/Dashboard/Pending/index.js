import React from 'react'
import { Card } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import 'moment/locale/pt-br'


// Custon components
import ItemList from '../../../components/ItemList'
import { styles, Container } from './styles'

export default function Pending() {
  const dispatch = useDispatch();
  const registers = useSelector(state => state.registers);
  return (
    <Container>
      <Card elevation={3}>
        <Card.Title
          title="Contas pendentes"
          titleStyle={styles.titleStyle}
        />
        <Card.Content>
          {registers.map((item) => <ItemList key={item.id} data={item} />)}
        </Card.Content>
      </Card>
    </Container>
  );
}