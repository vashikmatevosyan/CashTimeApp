import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Offer from '../screens/Offer';

function OfferNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="Offer" component={Offer} />
    </Stack.Navigator>
  );
}

export default OfferNavigation;
