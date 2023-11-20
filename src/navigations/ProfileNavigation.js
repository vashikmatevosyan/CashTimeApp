import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Image,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import Profile from '../screens/Profile';
import { BLACK, INDIGO_BLUE } from '../theme/colors';
import { RW } from '../helpers/ratio';
import ProfileMenu from '../screens/ProfileMenu';
import ProfileEdit from '../screens/ProfileEdit';
import SvgComponentDefaultImage from '../components/imagesSvgComponents/SvgComponentDefaultImage';
import avatarImage from '../../assets/images/avatar.png';

function ProfileNavigation({ navigation }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
      ),
    }}
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
