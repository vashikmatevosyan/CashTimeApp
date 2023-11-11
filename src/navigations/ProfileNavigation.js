import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import Profile from '../screens/Profile';

function ProfileNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerLeft: () => (
        <View>
          <Text>
            Back
          </Text>
        </View>
      ),
    }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default ProfileNavigation;
