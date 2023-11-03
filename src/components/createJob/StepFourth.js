import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RH } from '../../helpers/ratio';
import CreateJobsTitles from './CreateJobsTitles';
import SelectPriceMethodCheckbox from './SelectPriceMethodCheckbox';
import PriceMinMaxInputs from './PriceMinMaxInputs';
import FixedPriceInputs from './FixedPriceInputs';

function StepFourth() {
  const methods = ['Hourly Rate', 'Project Budget'];
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('Hourly Rate');
  // console.log(priceFrom, priceTo, selectedMethod, maxPrice);
  return (
    <View style={styles.container}>
      <CreateJobsTitles title="Tell us about your budget." align="center" />
      <View style={styles.content}>
        {methods.map((item) => (
          <SelectPriceMethodCheckbox
            key={item}
            item={item}
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
          />
        ))}
      </View>
      <View>
        {selectedMethod === 'Hourly Rate' ? (
          <PriceMinMaxInputs
            priceFrom={priceFrom}
            setPriceFrom={setPriceFrom}
            priceTo={priceTo}
            setPriceTo={setPriceTo}
          />
        ) : <FixedPriceInputs maxPrice={maxPrice} setMaxPrice={setMaxPrice} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(40),
    width: '95%',
    position: 'relative',
  },
  content: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StepFourth;
