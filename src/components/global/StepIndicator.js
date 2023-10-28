import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ORANGE, WHITE } from '../../theme/colors';
import { RH, RW } from '../../helpers/ratio';

function StepIndicator({ number, step }) {
  return (
    <View key={number} style={styles.numbersWrapper}>
      {number !== 1 && <Text style={styles.line} />}
      <View style={[styles.numberBack, { backgroundColor: step === number ? ORANGE : WHITE }]}>
        <Text style={styles.number}>{number}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  numbersWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberBack: {
    width: RW(50),
    height: RH(50),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontFamily: 'Lato-Regular',
    fontSize: 24,
  },
  line: {
    width: RW(15),
    height: RH(1),
    backgroundColor: WHITE,
  },
});

export default StepIndicator;
