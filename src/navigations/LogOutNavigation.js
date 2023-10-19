import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import UnLock from '../screens/no-sign-up-screens/UnLock';
import SignUpMethod from '../screens/no-sign-up-screens/SignUpMethod';
import SignUp from '../screens/no-sign-up-screens/SignUp';
import {INDIGO_BLUE} from '../theme/colors';

function LogOutNavigation() {
    const Stack = createStackNavigator();

    return (
        <>
            <StatusBar backgroundColor={INDIGO_BLUE}/>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Unlock" component={UnLock}/>
                <Stack.Screen name="SignUpMethod" component={SignUpMethod}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
            </Stack.Navigator>
        </>
    );
}

export default LogOutNavigation;
