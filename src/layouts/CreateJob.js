import React, { useCallback, useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList, ScrollView,
  StatusBar,
  StyleSheet, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { INDIGO_BLUE, WHITE } from '../theme/colors';
import LogoView from '../components/global/LogoView';
import { RH, RW } from '../helpers/ratio';
import StepFirst from '../components/createJob/StepFirst';
import StepIndicator from '../components/global/StepIndicator';
import CreateButtons from '../components/global/CreateButtons';
import StepThird from '../components/createJob/StepThird';
import StepFourth from '../components/createJob/StepFourth';
import StepFive from '../components/createJob/StepFive';
import StepSix from '../components/createJob/StepSix';
import { getCountries } from '../store/actions/utils';
import StepTwo from '../components/createJob/StepTwo';
import setJobFormData from '../store/actions/createJobForm';
import FinallyView from '../components/createJob/FinallyView';

const screenHeight = Dimensions.get('window').height;

function CreateJob() {
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState({});
  const [step, setStep] = useState(1);
  const [file, setFile] = useState({});
  const countries = useSelector((state) => state.utils.countries);
  const numbers = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  const handleDataFromChild = (childData, x) => {
    setLocalData((prevData) => ({
      ...prevData,
      ...childData,
    }));
    setFile(x);
  };
  const handleChangeStep = useCallback((method) => {
    if (method === '+' && step < 7) {
      setStep((prevState) => prevState + 1);
      dispatch(setJobFormData({ data: localData }));
    } else if (method === '-' && step > 1) {
      setStep((prevState) => prevState - 1);
    }
  }, [step, localData]);
  const handleGetBack = useCallback(() => {
    setStep(1);
  }, [step]);
  return (
    <ScrollView
      contentContainerStyle={{ height: RH(screenHeight) }}
      style={styles.wrapper}
    >
      <View style={styles.container}>
        <LogoView />
        {step <= 6 && (
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
        )}
        {step === 1 && <StepFirst onData={handleDataFromChild} />}
        {step === 2 && <StepTwo onData={handleDataFromChild} />}
        {step === 3 && <StepThird onData={handleDataFromChild} />}
        {step === 4 && <StepFourth onData={handleDataFromChild} />}
        {step === 5 && <StepFive onData={handleDataFromChild} />}
        {step === 6 && <StepSix file={file} onData={handleDataFromChild} countries={countries} />}
        {step === 7 && <FinallyView file={file} getBack={handleGetBack} />}
        {step <= 6 && <CreateButtons handleChangeStep={handleChangeStep} />}
      </View>
    </ScrollView>
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
    // marginTop: 50,
    flex: 1,
    // height: screenHeight,
  },
  indicatorWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: RH(40),
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
