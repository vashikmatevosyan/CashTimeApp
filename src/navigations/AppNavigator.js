import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { useSelector } from 'react-redux';
import LogOutNavigation from './LogOutNavigation';
import LogInNavigation from './LogInNavigation';
import NoInternetScreen from '../screens/NoInternetScreen';

function AppNavigator() {
  const token = useSelector((state) => state.users.token);
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  if (!isConnected) {
    return (
      <NoInternetScreen
        onRetry={() => NetInfo.fetch().then((state) => setIsConnected(state.isConnected))}
      />
    );
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      {token ? <LogInNavigation /> : <LogOutNavigation />}
    </NavigationContainer>

  );
}

export default AppNavigator;
