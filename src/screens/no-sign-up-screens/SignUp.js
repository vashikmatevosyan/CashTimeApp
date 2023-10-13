import React from 'react';
import {
  View, Text, StyleSheet, StatusBar,
} from 'react-native';
import { INDIGO_BLUE } from '../../theme/colors';
import LogoView from '../../components/global/LogoView';
import SvgComponentSignUpPageImg from '../../components/imagesSvgComponents/SvgComponentSignUpPageImg';

function SignUp({ route }) {
  const { params } = route;
  console.log(params);
  return (
    <View style={styles.container}>
      <LogoView />
      <View style={styles.imagesContainer}>
        <SvgComponentSignUpPageImg />
      </View>
      <View>
        <Text>Sign Up</Text>
      </View>
    </View>
  );
  //ankap comment
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: INDIGO_BLUE,
    paddingTop: StatusBar.currentHeight || 0,
  },
  imagesContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
  },
});

export default SignUp;
