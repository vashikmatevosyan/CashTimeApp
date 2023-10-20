import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from '../screens/Home';
import UnLock from '../screens/no-sign-up-screens/UnLock';
import SignUpMethod from '../screens/no-sign-up-screens/SignUpMethod';
import SignUp from '../screens/no-sign-up-screens/SignUp';
import { INDIGO_BLUE } from '../theme/colors';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={INDIGO_BLUE} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Unlock" component={UnLock} />
          <Stack.Screen name="SignUpMethod" component={SignUpMethod} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default AppNavigator;
