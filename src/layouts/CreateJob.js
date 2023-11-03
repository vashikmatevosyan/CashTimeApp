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
import StepThird from '../components/createJob/StepThird';
import StepFourth from '../components/createJob/StepFourth';
import StepFive from '../components/createJob/StepFive';
import StepSix from '../components/createJob/StepSix';

function CreateJob() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [step, setStep] = useState(6);
  const handleChangeStep = useCallback((method) => {
    if (method === '+' && step < 6) {
      setStep((prevState) => prevState + 1);
    } else if (method === '-' && step > 1) {
      setStep((prevState) => prevState - 1);
    }
  }, [step]);
  return (
    <View style={styles.wrapper}>
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
        {step === 3 && <StepThird />}
        {step === 4 && <StepFourth />}
        {step === 5 && <StepFive />}
        {step === 6 && <StepSix />}
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
