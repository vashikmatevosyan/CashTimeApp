import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Messages from '../screens/Messages';
import MessagesChat from '../screens/MessagesChat';

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
      <Stack.Screen name="MessagesChat" component={MessagesChat} />
    </Stack.Navigator>
  );
}

export default MessagesNavigation;
