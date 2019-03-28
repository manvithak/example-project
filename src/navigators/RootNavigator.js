/**
 * @providesModule RootNavigator
 */

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from '../views/Login/LoginView'
import Home from '../views/HomeView'
import AddStudent from '../views/AddStudent'

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Home: {
      screen: Home
    },
    AddStudent: {
      screen: AddStudent
    }
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(RootStack);
