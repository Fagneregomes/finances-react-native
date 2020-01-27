import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
import commonStyles from '../../styles'

export const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: commonStyles.colors.background,
    fontSize: 18
  },
  CurrencyInput: {
    backgroundColor: commonStyles.colors.background,
    fontSize: 18,
    padding: 17
  },
  colorDanger: {
    color: 'red'
  },
  Button: {
    margin: 5
  }
})

export const Container = styled.View`
  margin: 10px;
`;

export const BoxHeader = styled.View`
  flex-direction: row;
`

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${commonStyles.colors.text};
`
export const BoxInput = styled.View`
  margin-top: 10px;
`

export const BoxButtons = styled.View`
  flex-direction: row;
`
export const DisplayDate = styled.TouchableOpacity`
  justify-content:center;
  background: ${commonStyles.colors.background};
  padding: 20px;
  border-bottom-width: 1;
  border-bottom-color: #AAA;
`

export const TextDate = styled.Text`
  font-size: 18px;
  color: ${commonStyles.colors.text};
`

export const BorderPicker = styled.View`
  border-bottom-width: 1;
  border-bottom-color: #AAA;
`
export const Picker = styled.Picker`

`