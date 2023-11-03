import React from 'react';
import { StyleSheet, View } from 'react-native';
import UltraSmallText from './UltraSmallText';
import { RH } from '../../helpers/ratio';
import JobsInputs from './JobsInputs';

function FixedPriceInputs({ maxPrice, setMaxPrice }) {
  return (
    <View style={styles.container}>
      <UltraSmallText text="Maximum project budget (USD)" top={RH(30)} />
      <JobsInputs value={maxPrice} setValue={setMaxPrice} width="100%" top={RH(10)} keyboardType="numeric" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default FixedPriceInputs;
