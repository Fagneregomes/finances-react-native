import { DefaultTheme } from 'react-native-paper';

export default {
  fontFamily: 'Lato',
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7159c1',
    secundary: '#250048',
    button: '#F9386A',
    text: '#222'
  }
}