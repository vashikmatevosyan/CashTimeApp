// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from 'react-native-slide-to-unlock';
import React from 'react';
import {
  Alert, Text, View, StyleSheet, Image,
} from 'react-native';
import { DARK_BLUE, ORANGE, WHITE } from '../../theme/colors';
import getStartIcon from '../../../assets/images/singup-login-screens/get-starat-row-icon.png';

function SlideToUnlock() {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <Slider
        childrenContainer={{ backgroundColor: WHITE }}
        onEndReached={() => {
          Alert.alert('Attention', 'onEndReached!');
        }}
        containerStyle={{
          backgroundColor: WHITE,
          marginLeft: '',
          borderRadius: 48,
          overflow: 'hidden',
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
          height: 60,
        }}
        sliderElement={(
          <View style={styles.sliderEllipse}>
            <Image source={getStartIcon} />
          </View>
        )}
      >
        <Text style={styles.text}>Get Started</Text>
      </Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderEllipse: {
    width: 50,
    height: 50,
    borderRadius: 70,
    backgroundColor: ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
  text: {
    color: DARK_BLUE,
    fontFamily: 'Poppins,sans-serif',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft: '70%',
  },
});
export default SlideToUnlock;
