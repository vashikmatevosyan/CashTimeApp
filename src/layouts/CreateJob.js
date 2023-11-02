import React, { useCallback, useState } from 'react';
import {
  StatusBar,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { INDIGO_BLUE, ORANGE, WHITE } from '../theme/colors';
import LogoView from '../components/global/LogoView';
import { RH, RW } from '../helpers/ratio';
import StepFirts from '../components/createJob/StepFirts';

function CreateJob() {
  const number = [1, 2, 3, 4, 5, 6];
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
          {number.map((e) => (
            <View key={e} style={styles.numbersWrapper}>
              {e !== 1 && <Text style={styles.line} />}
              <View style={[styles.numberBack, { backgroundColor: step === e ? ORANGE : WHITE }]}>
                <Text style={styles.number}>{e}</Text>
              </View>
            </View>
          ))}
        </View>
        {step === 1 && <StepFirts />}
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => handleChangeStep('-')}>
            <Text style={styles.btn}>
              Go Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleChangeStep('+')}>
            <Text style={styles.btn}>
              Skip For Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: INDIGO_BLUE,
    flex: 1,
    paddingTop: 10 + StatusBar.currentHeight,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
  },
  indicatorWrapper: {
    flexDirection: 'row',
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
