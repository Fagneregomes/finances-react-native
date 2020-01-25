import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux'
import moment from 'moment'

import { Subheading, Caption } from 'react-native-paper'

import { Container, BorderIcon, BoxLeft, ContentLeft, BoxRight, ContentRight } from './styles';


export default function ItemList(props) {
  const { description, idCategory, date, price, type } = props
  const categories = useSelector(state => state.categories);
  const sCategory = categories.data.find(item => item.id === idCategory)

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
          {type === 0
            ? <Subheading style={{ color: 'red' }}>R$ - {price.toFixed(2)}</Subheading>
            : <Subheading style={{ color: 'green' }}>R$ {price.toFixed(2)}</Subheading>
          }
        </ContentRight>
      </BoxRight>
    </Container>
  );
}
