import styled from 'styled-components/native';
import commonStyles from '../../styles'

export const Container = styled.View`
  flex: 1;
  background: ${commonStyles.colors.background};
`;

export const BoxHeader = styled.View`
  flex-direction: row;
`
export const BoxRefresh = styled.View`
  margin-right: 20px;
`

export const TextHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${commonStyles.colors.text}
`