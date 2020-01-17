import React from 'react'
import { Card, List, Avatar, Caption, Paragraph } from 'react-native-paper'
import 'moment/locale/pt-br'

// Custon components
import ItemList from '../../../components/ItemList'
import { styles, Container } from './styles'

import registers from '../../../services/registers'

export default function Resume() {
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

