import { DefaultTheme } from 'react-native-paper';

export default {
  fontFamily: 'Lato',
  dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#250048',
    secundary: '#F9386A',
    theme: ['#7159c1', '#250048'],
    text: '#222'
  }
}