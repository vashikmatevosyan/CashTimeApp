import React, { useCallback, useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet, View,
} from 'react-native';
import { INDIGO_BLUE, WHITE } from '../theme/colors';
import LogoView from '../components/global/LogoView';
import { RH, RW } from '../helpers/ratio';
import StepFirst from '../components/createJob/StepFirst';
import StepIndicator from '../components/global/StepIndicator';
import CreateButtons from '../components/global/CreateButtons';
import StepThird from '../components/createJob/StepThird';
import StepFourth from '../components/createJob/StepFourth';

function CreateJob() {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [step, setStep] = useState(4);
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
  line: {
    width: RW(20),
    height: RH(1),
    backgroundColor: WHITE,
  },
  numbersWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberBack: {
    width: RW(50),
    height: RH(50),
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontFamily: 'Lato-Regular',
    fontSize: RW(24),
    marginBottom: RH(2),
    textAlign: 'center',
    width: '100%',
  },
  btn: {
    fontFamily: 'Lato-Bold',
    color: WHITE,
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    marginBottom: RH(20),
  },
});

export default CreateJob;
