import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'
import { commonStyles } from '../../styles'
export const Background = styled(LinearGradient).attrs({
  colors: [commonStyles.primary, commonStyles.secundary]
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
