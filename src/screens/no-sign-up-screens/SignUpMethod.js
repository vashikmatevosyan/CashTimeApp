import React from 'react';
import {
  StatusBar, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {
  BLACK, DARK_BLUE, INDIGO_BLUE, WHITE,
} from '../../theme/colors';
import LogoView from '../../components/global/LogoView';
import SvgComponentSignUpMethodScreen
  from '../../components/imagesSvgComponents/SvgComponentSignUpMethodScreen';

function SignUpMethod() {
  return (
    <View style={styles.container}>
      <LogoView />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Join us as a Client or as a Freelancer
        </Text>
      </View>
      <View style={styles.imagesContainer}>
        <SvgComponentSignUpMethodScreen />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.5} style={styles.button}>
          <Text style={styles.buttonText}>
            Sign Up as a Employee
          </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={[styles.button, { backgroundColor: WHITE }]}>
          <Text style={[styles.buttonText, { color: BLACK }]}>
            Sign Up as a Employer
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Already have an Account?
        </Text>
        <TouchableOpacity>
          <Text style={[styles.loginText, { textDecorationLine: 'underline', marginLeft: 5 }]}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: INDIGO_BLUE,
    paddingTop: StatusBar.currentHeight || 0,
  },
  text: {
    color: WHITE,
    fontFamily: 'Lato,sans-serif',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '800',
    width: 299,
  },
  textContainer: {
    width: '95%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imagesContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: '95%',
    height: 60,
    backgroundColor: DARK_BLUE,
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: WHITE,
    fontFamily: 'Lato,sans-serif',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loginText: {
    color: WHITE,
    fontFamily: 'Lato,sans-serif',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});

export default SignUpMethod;
