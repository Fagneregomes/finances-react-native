import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { Sign } from './Sign'
import { App } from './App'

const Routes = createAppContainer(
  createSwitchNavigator({
    Sign,
    App
  })
);

export default Routes;
