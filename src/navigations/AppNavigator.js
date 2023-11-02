import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import LogOutNavigation from './LogOutNavigation';
import LogInNavigation from './LogInNavigation';

function AppNavigator() {
  const token = true;
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      {token ? <LogInNavigation /> : <LogOutNavigation />}
    </NavigationContainer>

  );
}

export default AppNavigator;
