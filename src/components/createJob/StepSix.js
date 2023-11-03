import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import { ORANGE, WHITE } from '../../theme/colors';
import SvgComponentDefaultImage from '../imagesSvgComponents/SvgComponentDefaultImage';

function StepSix() {
  return (
    <View style={styles.container}>
      <View style={styles.imageBlock}>
        <SvgComponentDefaultImage />
      </View>
      <TouchableOpacity>
        <Text>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(40),
    width: '95%',
    height: '60%',
    position: 'relative',
    backgroundColor: WHITE,
    borderRadius: 25,
    padding: 10,
  },
  imageBlock: {
    width: RW(100),
    height: RH(100),
    backgroundColor: ORANGE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StepSix;
