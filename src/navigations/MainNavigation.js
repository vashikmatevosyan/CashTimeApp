import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../screens/Main';

function MainNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}

export default MainNavigation;
