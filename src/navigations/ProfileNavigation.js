import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Image,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Profile from '../screens/Profile';
import { RW } from '../helpers/ratio';
import ProfileMenu from '../screens/ProfileMenu';
import ProfileEdit from '../screens/ProfileEdit';
import avatarImage from '../../assets/images/avatar.png';
import Languages from '../screens/Languages';
import Notification from '../screens/Notification';

function ProfileNavigation({ navigation }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
        ),
      }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen options={{ headerShown: false }} name="ProfileMenu" component={ProfileMenu} />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{
          headerTitle: 'Settings',
          headerRight: () => (
            <View>
              <Image
                style={{
                  width: 35, height: 35, borderRadius: 50, marginRight: 15,
                }}
                source={avatarImage}
                alt=""
              />
            </View>
          ),

        }}
      />
      <Stack.Screen
        options={{
          headerRight: () => (
            <View>
              <Image
                style={{
                  width: 35, height: 35, borderRadius: 50, marginRight: 15,
                }}
                source={avatarImage}
                alt="avatar"
              />
            </View>
          ),

        }}
        name="Languages"
        component={Languages}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#4A62B6',
    marginLeft: RW(10),
    fontFamily: 'Lato-Regular',
    fontSize: RW(17),
  },
});
export default ProfileNavigation;
