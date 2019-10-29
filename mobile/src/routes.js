import { createAppContainer, createBottomTabNavigator , createSwitchNavigator } from 'react-navigation'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default createAppContainer(
  createBottomTabNavigator({
    SignIn,
    SignUp
  })
);
