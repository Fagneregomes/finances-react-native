import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'

export const Background = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#4B0082']
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
