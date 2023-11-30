import React from 'react'; import {
  StatusBar,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; import {
  BLACK, DARK_BLUE, INDIGO_BLUE, WHITE,
} from '../../theme/colors';
import LogoView from '../../components/global/LogoView'; import SvgComponentSignUpMethodScreen
  from '../../components/imagesSvgComponents/SvgComponentSignUpMethodScreen'; import { RW } from '../../helpers/ratio';

function SignUpMethod() {
  const navigation = useNavigation();
  return (
    <View style={styles.signUpMethod}>
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
          <TouchableOpacity onPress={() => navigation.navigate('SignUp', { method: 'Employee' })} activeOpacity={0.5} style={styles.button}>
            <Text style={styles.buttonText}>
              Sign Up as a Employee
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp', { method: 'Employer' })} activeOpacity={0.5} style={[styles.button, { backgroundColor: WHITE }]}>
            <Text style={[styles.buttonText, { color: BLACK }]}>
              Sign Up as a Employer
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>
            Already have an Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.loginText, { textDecorationLine: 'underline', marginLeft: 5 }]}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  signUpMethod: {
    backgroundColor: INDIGO_BLUE,
    paddingTop: StatusBar.currentHeight + 10,
    flex: 1,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'space-around',
    flex: 1,
  },
  text: {
    color: WHITE,
    fontFamily: 'Lato-Bold',
    fontSize: RW(36),
    fontStyle: 'normal',
  },
  textContainer: {
    marginTop: 20,
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
    width: '100%',
    height: 60,
    backgroundColor: DARK_BLUE,
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: WHITE,
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    fontStyle: 'normal',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loginText: {
    color: WHITE,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    fontStyle: 'normal',
  },
});
export default SignUpMethod;
