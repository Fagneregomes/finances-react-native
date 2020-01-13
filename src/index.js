import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';

import Routes from "./routes";

// Styles
import commonStyles from './styles'

console.log(commonStyles)
export default function App() {
  return (
    <PaperProvider theme={commonStyles}>
      <StatusBar backgroundColor={commonStyles.colors.primary} barStyle="light-content" />
      <Routes />
    </PaperProvider >
  );
}
