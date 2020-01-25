import { createSwitchNavigator } from "react-navigation";

import Preload from '../../components/Preload'
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

export const Sign = createSwitchNavigator({
  Preload,
  SignIn,
  SignUp
})