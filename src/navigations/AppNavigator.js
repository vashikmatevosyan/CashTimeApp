import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LogOutNavigation from './LogOutNavigation';
import LogInNavigation from './LogInNavigation';

function AppNavigator() {
  const token = true;
  return (
    <NavigationContainer>
      {token ? <LogInNavigation /> : <LogOutNavigation />}
    </NavigationContainer>

  );
}

export default AppNavigator;
