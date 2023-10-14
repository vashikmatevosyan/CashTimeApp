import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Messages from '../screens/Messages';

function MessagesNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Messages"
    >
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
}

export default MessagesNavigation;
