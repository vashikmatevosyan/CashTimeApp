import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import ProfileNavigation from './ProfileNavigation';
import OfferNavigation from './OfferNavigation';
import MessagesNavigation from './MessagesNavigation';
import SvgComponentMainIcon from '../components/imagesSvgComponents/SvgComponentMainIcon';
import SvgComponentProfileIcon from '../components/imagesSvgComponents/SvgComponentProfileIcon';
import SvgComponentOfferIcon from '../components/imagesSvgComponents/SvgComponentOfferIcon';
import SvgComponentMessagesIcon from '../components/imagesSvgComponents/SvgComponentMessagesIcon';
import BottomIconTitle from '../components/global/BottomIconTitle';
import CreateNavigation from './CreateNavigation';
import SvgComponentCircleIcon from '../components/imagesSvgComponents/SvgComponentCircleIcon';
import Main from '../screens/Main';

function LogInNavigation() {
  const bottomTabVisible = useSelector((state) => state.app.tabBarIsVisible);
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: bottomTabVisible ? {
      padding: 10, height: 70, display: 'flex', flexDirection: 'row', alignItems: 'center',
    } : {
      display: 'none',
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="MainNavigation">
      <Tab.Screen
        name="MainNavigation"
        component={Main}
        options={{
          title: (props) => <BottomIconTitle text="Main" active={props.focused} />,
          tabBarIcon: (props) => <SvgComponentMainIcon active={props.focused} />,
        }}
      />
      <Tab.Screen
        name="MessagesNavigation"
        component={MessagesNavigation}
        options={{
          title: (props) => <BottomIconTitle text="Messages" active={props.focused} />,
          tabBarIcon: (props) => <SvgComponentMessagesIcon active={props.focused} />,
        }}
      />
      <Tab.Screen
        name="CreateNavigation"
        component={CreateNavigation}
        options={{
          title: () => null,
          tabBarIcon: () => <SvgComponentCircleIcon />,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="OfferNavigation"
        component={OfferNavigation}
        options={{
          title: (props) => <BottomIconTitle text="Offer" active={props.focused} />,
          tabBarIcon: (props) => <SvgComponentOfferIcon active={props.focused} />,
        }}
      />
      <Tab.Screen
        name="ProfileNavigation"
        component={ProfileNavigation}
        options={{
          title: (props) => <BottomIconTitle text="Profile" active={props.focused} />,
          tabBarIcon: (props) => <SvgComponentProfileIcon active={props.focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default LogInNavigation;
