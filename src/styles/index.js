import { DefaultTheme } from 'react-native-paper';

export default {
  fontFamily: 'Lato',
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#250048',
    secundary: '#9b23ea',
    button: '#00C1EB',
    text: '#333'
  }
}