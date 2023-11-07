import React, { useState } from 'react';
import {
  View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity,
} from 'react-native';
import {
  BLACK, DARK_BLUE, INDIGO_BLUE, WHITE,
} from '../../theme/colors';
import { RH, RW } from '../../helpers/ratio';
import LogoView from '../../components/global/LogoView';
import SvgComponentGradientSignUp
  from '../../components/imagesSvgComponents/SvgComponentGradientSignUp';
import SvgComponentGradientSignUpLeft
  from '../../components/imagesSvgComponents/SvgComponentGradientSignUpLeft';
import SvgComponentLogin from '../../components/imagesSvgComponents/SvgComponentLogin';

function Login(props) {
  const [errorText, setErrorText] = useState(false);

  return (
    <View style={styles.logIn}>
      <View style={styles.container}>
        <View>
          <LogoView />
        </View>
        <View>
          <Text style={styles.titleText}>Log in to CashApp</Text>
        </View>
        <View>
          <TextInput
            placeholder="Username or  Email"
            placeholderTextColor="black"
            style={styles.input}
          />
          <Text style={styles.errorText}>{errorText || ''}</Text>
          <TextInput
            keyboardType="visible-password"
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.input}
          />
          <Text style={styles.errorText}>{errorText || ''}</Text>
        </View>
        <TouchableOpacity style={styles.gradientBox}>
          <SvgComponentGradientSignUp />
          <Text style={styles.logInText}>Don’t have an Account?</Text>
          <SvgComponentGradientSignUpLeft />
        </TouchableOpacity>
        <View>
          <TouchableOpacity title="Create my Account" style={styles.createBtn}><Text style={styles.signUpText}>Continue with Email</Text></TouchableOpacity>
        </View>
        <View style={styles.svgContainer}><SvgComponentLogin /></View>
      </View>
      <View />

    </View>
  );
}

const styles = StyleSheet.create({

  logIn: {
    flex: 1,
    backgroundColor: INDIGO_BLUE,
    paddingTop: StatusBar.currentHeight + 10,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    // flex: 1,
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(32),
    marginTop: RH(70),
    color: '#FFF',
    marginBottom: RH(60),
  },
  input: {
    textAlign: 'left',
    alignSelf: 'stretch',
    fontFamily: 'Lato-Semi Bold',
    width: RW(335),
    height: RH(45),
    backgroundColor: WHITE,
    borderColor: '#FFFFFF',
    color: BLACK,
    borderRadius: 8,
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 5,
    textDecorationLine: 'none',
    overflow: 'hidden',
  },
  gradientBox: {
    width: RW(335),
    height: RH(37),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  logInText: {
    fontFamily: 'Lato-Normal',
    fontSize: RW(14),
    color: '#FFF',
    marginLeft: RW(5),
    marginRight: RW(5),
  },
  createBtn: {
    width: RW(335), // Set the custom width here
    height: RH(40),
    backgroundColor: DARK_BLUE,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: RH(25),
  },
  errorText: {
    fontFamily: 'Lato-Semi Bold',
    fontSize: RW(14),
    color: '#E31515',
    // textAlign: 'center',
  },
  svgContainer: {
    width: RW(335),
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Login;
