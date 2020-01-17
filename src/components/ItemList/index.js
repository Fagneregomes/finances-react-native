import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'

import { Subheading, Caption } from 'react-native-paper'

import { Container, BorderIcon, BoxLeft, ContentLeft, BoxRight, ContentRight } from './styles';

import categories from '../../services/categories'

export default function ItemList(props) {
  const { description, idCategory, date } = props.data
  const sCategory = categories.find(item => item.id === idCategory)

  return (
    <Container>
      <BoxLeft>
        <BorderIcon iconColor={sCategory.color}>
          <Icon name={sCategory.icon} size={25} color={sCategory.color} />
        </BorderIcon>
        <ContentLeft>
          <Caption numberOfLines={1} >{moment(date).locale('pt-br').format('ddd, D [de] MMMM')}</Caption>
          <Subheading numberOfLines={1}>{description}</Subheading>
        </ContentLeft>
      </BoxLeft>

      <BoxRight>
        <ContentRight>
          <Caption>{sCategory.description}</Caption>
          <Subheading>R$ 250.00</Subheading>
        </ContentRight>
      </BoxRight>
    </Container>
  );
}
