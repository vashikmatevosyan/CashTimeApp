import Slider from 'react-native-slide-to-unlock';
import React from 'react';
import {
  Text, View, StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DARK_BLUE, ORANGE, WHITE } from '../../theme/colors';
import SvgComponentArrowRight from '../imagesSvgComponents/SvgComponentArrowRight';
import { RH, RW } from '../../helpers/ratio';

function SlideToUnlock() {
  const navigation = useNavigation();
  return (
    <View style={styles.sliderContainer}>
      <Slider
        childrenContainer={{ backgroundColor: WHITE }}
        onEndReached={() => {
          navigation.navigate('SignUpMethod');
        }}
        containerStyle={styles.containerStyle}
        sliderElement={(
          <View style={styles.sliderEllipse}>
            <SvgComponentArrowRight />
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
    fontFamily: 'Lato-Bold',
    fontSize: RW(18),
    fontStyle: 'normal',
    marginLeft: '70%',
  },
  sliderContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: WHITE,
    marginLeft: '',
    borderRadius: 48,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: RH(70),
  },
});
export default SlideToUnlock;
