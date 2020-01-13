import React from 'react';
import { Card, Button, Paragraph, Title, Avatar } from 'react-native-paper'

import { Container } from './styles'

export default function Resume() {
  return (
    <Container>
      <Card elevation={2}>
        <Card.Title title="Contas pendentes" subtitle="Contas em atraso" left={(props) => <Avatar.Icon {...props} icon="" />} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
    </Container>
  );
}
