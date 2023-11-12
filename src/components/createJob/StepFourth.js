import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RH } from '../../helpers/ratio';
import CreateJobsTitles from './CreateJobsTitles';
import SelectPriceMethodCheckbox from './SelectPriceMethodCheckbox';
import PriceMinMaxInputs from './PriceMinMaxInputs';
import FixedPriceInputs from './FixedPriceInputs';

function StepFourth({ onData }) {
  const methods = ['Hourly Rate', 'Project Budget'];
  const fourthFormPrice = useSelector((state) => state.createJobForm.dataFromChild4) ?? {};
  const [selectedMethod, setSelectedMethod] = useState(fourthFormPrice.method || 'Hourly Rate');
  const [priceFrom, setPriceFrom] = useState(fourthFormPrice.priceFrom || '');
  const [priceTo, setPriceTo] = useState(fourthFormPrice.priceTo || '');
  const [maxPrice, setMaxPrice] = useState(fourthFormPrice.maxPrice || '');
  useEffect(() => {
    onData({
      dataFromChild4: {
        method: selectedMethod,
        priceFrom: priceFrom || null,
        priceTo: priceTo || null,
        maxPrice: maxPrice || null,
      },
    });
  }, [priceFrom, priceTo, maxPrice, selectedMethod]);
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
