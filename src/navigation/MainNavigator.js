import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../screens/splash-screen';
import Home from '../navigation/HomeNavigator';
import AddPin from '../screens/pin-lock-screen';
import AddFingerprint from '../screens/fingerprint-screen';
import Auth from '../screens/authenticate-screen';
import AddNotes from '../screens/add-notes-screen';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddNote" component={AddNotes} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="AddPin" component={AddPin} />
      <Stack.Screen name="AddFingerprint" component={AddFingerprint} />
    </Stack.Navigator>
  );
}

export default MainStack;
