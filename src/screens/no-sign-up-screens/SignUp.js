import React, { useCallback, useRef, useState } from 'react';
import {
  View, Text, StyleSheet,
  TextInput, TouchableOpacity, ScrollView, StatusBar,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
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
import { registerRequest } from '../../store/actions/users';
import AddressAutocomplete from '../../components/global/AddressAutocomplete';

function SignUp({ route, navigation }) {
  const { params } = route;
  const [address, setAddress] = useState({
    latitude: '',
    longitude: '',
    fullAddress: '',
    country: '',
    city: '',
  });
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
    role: params.method,
  });
  const dispatch = useDispatch();
  const handleRegister = useCallback(async () => {
    const { payload } = await dispatch(registerRequest({ ...data, address }));
    const { validationCode } = payload.user;
    if (payload.status === 'ok') {
      navigation.navigate('VerifyEmail', { validationCode });
    } else {
      Toast.show({
        type: 'error',
        text1: payload.message,
        topOffset: RH(200),
      });
    }
  }, [data]);
  const ref = useRef();
  return (
    <ScrollView ref={ref} style={styles.signUp}>
      <View style={styles.container}>
        <LogoView />
        <View style={styles.imagesContainer}>
          <SvgComponentSignUpPageImg />
        </View>
        <View>
          <Text style={styles.titleText}>Sign Up</Text>
        </View>
        <View>
          <View style={styles.input}>
            <PhoneNumberInput setData={setData} data={data} />
          </View>
          <TextInput
            placeholder="First Name"
            placeholderTextColor="black"
            style={styles.input}
            onFocus={() => ref.current.scrollToEnd({ animated: true })}
            onChangeText={(text) => setData({ ...data, firstName: text })}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="black"
            style={styles.input}
            onFocus={() => ref.current.scrollToEnd({ animated: true })}
            onChangeText={(text) => setData({ ...data, lastName: text })}
          />
          <TextInput
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="black"
            style={styles.input}
            onFocus={() => ref.current.scrollToEnd({ animated: true })}
            onChangeText={(text) => setData({ ...data, email: text })}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.input}
            onFocus={() => ref.current.scrollToEnd({ animated: true })}
            onChangeText={(text) => setData({ ...data, password: text })}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="black"
            style={styles.input}
            onFocus={() => ref.current.scrollToEnd({ animated: true })}
            onChangeText={(text) => setData({ ...data, confirmPassword: text })}
          />
          <AddressAutocomplete bg={WHITE} height={100} defaultValue="" marginTop={0} setAddress={setAddress} />
        </View>
        <View style={styles.gradientBox}>
          <SvgComponentGradientSignUp />
          <Text style={styles.signUpText}>Or Sign up With</Text>
          <SvgComponentGradientSignUpLeft />
        </View>
        <View style={styles.googleBtn}>
          <SvgComponentGoogle />
        </View>
        <Toast />
        <View style={{ height: 150 }}>
          <TouchableOpacity onPress={handleRegister} title="Create my Account" style={styles.createBtn}><Text style={styles.signUpText}>Create my Account</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={{ marginBottom: 15 }} title="Already have an Account? Log in"><Text style={styles.signUpText}>Already have an Account? Log in</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

  signUp: {
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
  imagesContainer: {
    // flex: 2,
    width: '100%',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(32),
    marginTop: RH(50),
    color: '#FFF',
    marginBottom: RH(15),
  },
  input: {
    textAlign: 'left',
    alignSelf: 'stretch',
    fontFamily: 'Lato-Semi Bold',
    // borderWidth: 1,
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
    marginBottom: RH(15),
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
