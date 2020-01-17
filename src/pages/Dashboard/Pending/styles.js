import { StyleSheet } from 'react-native'
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
`;

export const ContentValue = styled.View`
  flex-direction: column;
`;


export const styles = StyleSheet.create({
  leftAvatar: {
    backgroundColor: 'white',
  },
  rightAvatar: {
    backgroundColor: '#FFF',
    elevation: 2,
    borderRadius: 100,
    margin: 10,
  },
  ListItem: {
    marginTop: 5,
    borderRadius: 5,
  },
  titleStyle: {
    fontWeight: 'bold'
  }
})