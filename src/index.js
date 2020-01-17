import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import Routes from "./routes";
import { store } from './store';

// Styles
import commonStyles from './styles'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={commonStyles}>
        <StatusBar backgroundColor={commonStyles.colors.primary} barStyle="light-content" />
        <Routes />
      </PaperProvider >
    </Provider>
  );
}
