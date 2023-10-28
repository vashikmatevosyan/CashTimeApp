import React, { useCallback, useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet, View,
} from 'react-native';
import { INDIGO_BLUE } from '../theme/colors';
import LogoView from '../components/global/LogoView';
import { RH } from '../helpers/ratio';
import StepFirst from '../components/createJob/StepFirst';
import StepIndicator from '../components/global/StepIndicator';
import CreateButtons from '../components/global/CreateButtons';

function CreateJob() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [step, setStep] = useState(1);
  const handleChangeStep = useCallback((method) => {
    if (method === '+' && step < 6) {
      setStep((prevState) => prevState + 1);
    } else if (method === '-' && step > 1) {
      setStep((prevState) => prevState - 1);
    }
  }, [step]);
  return (
    <View style={styles.wrapper}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <LogoView />
        <View style={styles.indicatorWrapper}>
          <FlatList
            data={numbers}
            showsHorizontalScrollIndicator={false}
            horizontal
            scrollEnabled={false}
            renderItem={({ item }) => (
              <StepIndicator
                number={item}
                step={step}
              />
            )}
          />
        </View>

        {step === 1 && <StepFirst />}
        <CreateButtons handleChangeStep={handleChangeStep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: INDIGO_BLUE,
    flex: 1,
    paddingTop: RH(10) + StatusBar.currentHeight,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
  },
  indicatorWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: RH(80),
  },
});

export default CreateJob;
