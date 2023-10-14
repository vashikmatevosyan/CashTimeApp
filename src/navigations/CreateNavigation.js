import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Create from '../screens/Create';

function CreateNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
}

export default CreateNavigation;
