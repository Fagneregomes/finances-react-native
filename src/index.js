import React from "react";
import { StatusBar } from "react-native";

import Routes from "./routes";

// Styles
import { commonStyles } from './styles'

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={commonStyles.primary} barStyle="light-content" />
      <Routes />
    </>
  );
}
