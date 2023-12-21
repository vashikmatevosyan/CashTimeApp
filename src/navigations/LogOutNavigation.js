import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UnLock from '../screens/no-sign-up-screens/UnLock';
import SignUpMethod from '../screens/no-sign-up-screens/SignUpMethod';
import SignUp from '../screens/no-sign-up-screens/SignUp';
import Login from '../screens/no-sign-up-screens/Login';
import VerifyEmail from "../screens/no-sign-up-screens/VerifyEmail";
import Verified from "../screens/no-sign-up-screens/Verified";
import Main from "../screens/Main";

function LogOutNavigation() {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Unlock" component={UnLock} />
        <Stack.Screen name="SignUpMethod" component={SignUpMethod} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        <Stack.Screen name="Verified" component={Verified} />
      </Stack.Navigator>
    </>
  );
}

export default LogOutNavigation;
