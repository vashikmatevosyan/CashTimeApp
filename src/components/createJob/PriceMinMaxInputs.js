import React from 'react';
import { StyleSheet, View } from 'react-native';
import UltraSmallText from './UltraSmallText';
import { RH } from '../../helpers/ratio';
import JobsInputs from './JobsInputs';

function PriceMinMaxInputs({
  priceFrom, priceTo, setPriceFrom, setPriceTo,
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={{ width: '40%' }}>
        <UltraSmallText text="From" />
        <View style={styles.inputText}>
          <JobsInputs value={priceFrom} setValue={setPriceFrom} top={RH(10)} width="100%" keyboardType="numeric" />
          <UltraSmallText size={18} text="$/hr" />
        </View>
      </View>
      <View style={{ width: '40%' }}>
        <UltraSmallText text="To" />
        <View style={styles.inputText}>
          <JobsInputs value={priceTo} setValue={setPriceTo} top={RH(10)} width="100%" keyboardType="numeric" />
          <UltraSmallText size={18} text="$/hr" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    marginTop: RH(30),
  },
  inputText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PriceMinMaxInputs;
