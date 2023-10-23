import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {
  View, Text, StyleSheet,
  TextInput, TouchableOpacity,
} from 'react-native';
import {
  BLACK, DARK_BLUE, INDIGO_BLUE, WHITE,
} from '../../theme/colors';
import LogoView from '../../components/global/LogoView';
import SvgComponentSignUpPageImg from '../../components/imagesSvgComponents/SvgComponentSignUpPageImg';
import { RH, RW } from '../../helpers/ratio';
import PhoneNumberInput from '../../components/global/PhoneNumberInput';
import SvgComponentGradientSignUp from '../../components/imagesSvgComponents/SvgComponentGradientSignUp';
import SvgComponentGradientSignUpLeft from '../../components/imagesSvgComponents/SvgComponentGradientSignUpLeft';
import SvgComponentGoogle from '../../components/imagesSvgComponents/SvgComponentGoogle';

function SignUp({ route }) {
  const { params } = route;
  const countries = ['Egypt', 'Canada', 'Australia',
    'Ireland', 'Egypt', 'Canada', 'Australia', 'Ireland',
    'Egypt', 'Canada', 'Australia', 'Ireland', 'Egypt', 'Canada', 'Australia', 'Ireland'];
  const dropdownStyles = {
    borderWidth: 2,
    borderColor: INDIGO_BLUE,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    width: RW(335),
    maxHeight: RH(350),
  };
  const inputStyles = {
    width: RW(335),
    height: RH(37),
    backgroundColor: WHITE,
    borderColor: '#FFFFFF',
    marginBottom: RH(15),
    color: BLACK,
    borderRadius: 8,
  };
  const rowStyles = {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  };

  return (

    <View style={styles.signUp}>
      <View style={styles.container}>
        <LogoView />
        <View style={styles.imagesContainer}>
          <SvgComponentSignUpPageImg />
        </View>
        <View>
          <Text style={styles.titleText}>Sign Up</Text>
        </View>
        <View>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            style={styles.input}
            // buttonStyle={{ backgroundColor: WHITE }}
            rowStyle={rowStyles}
            dropdownStyle={dropdownStyles}
            buttonStyle={inputStyles}
            defaultButtonText="Search of Servcie"
            buttonTextStyle={{
              fontSize: 14,
              padding: 0,
              margin: 0,
              marginHorizontal: 0,
            }}
          />
          <View style={styles.input}>
            <PhoneNumberInput />
          </View>
        </View>
        <View style={styles.gradientBox}>
          <SvgComponentGradientSignUp />
          <Text style={styles.signUpText}>Or Sign up With</Text>
          <SvgComponentGradientSignUpLeft />
        </View>
        <View style={styles.googleBtn}>
          <SvgComponentGoogle />
        </View>
        <View>
          <TouchableOpacity title="Create my Account" style={styles.createBtn}><Text style={styles.signUpText}>Create my Account</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ marginBottom: 15 }} title="Already have an Account? Log in"><Text style={styles.signUpText}>Already have an Account? Log in</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

  signUp: {
    flex: 1,
    backgroundColor: INDIGO_BLUE,
    paddingTop: 10,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    // flex: 1,
  },
  imagesContainer: {
    // flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(32),
    color: '#FFF',
    marginBottom: RH(15),
  },
  input: {
    alignSelf: 'stretch',
    fontFamily: 'Lato-Semi Bold',
    // borderWidth: 1,
    width: RW(335),
    height: RH(37),
    backgroundColor: WHITE,
    borderColor: '#FFFFFF',
    marginBottom: RH(15),
    color: BLACK,
    borderRadius: 8,
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 5,
    paddingRight: 5,
    textDecorationLine: 'none',
    overflow: 'hidden',
    // textDecorationLine: 'None',
  },
  gradientBox: {
    width: RW(335),
    height: RH(37),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  signUpText: {
    fontFamily: 'Lato-Normal',
    fontSize: RW(14),
    color: '#FFF',
    marginLeft: RW(5),
    marginRight: RW(5),
  },
  googleBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: RW(52),
    height: RH(52),
    backgroundColor: WHITE,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: RH(15),
  },
  createBtn: {
    width: RW(335), // Set the custom width here
    height: RH(40),
    backgroundColor: DARK_BLUE,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  navBtnBox: {
    width: RW(335),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navBtnText: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(14),
    color: '#FFF',
    marginBottom: RH(15),
  },
});

export default SignUp;
