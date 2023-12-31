import React, { useState } from 'react';
import {
  StatusBar, StyleSheet, Text, View,
} from 'react-native';
import { INDIGO_BLUE, WHITE } from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import LogoView from '../components/global/LogoView';
import CreateCvFirst from '../components/createCv/CreateCvFirst';
import CreateCvSecond from '../components/createCv/CreateCvSecond';
import CreateCvThird from '../components/createCv/CreateCvThird';
import CreateCvFourth from '../components/createCv/CreateCvFourth';
import CreateCvFifth from '../components/createCv/CreateCvFifth';
import CreateCvSixth from '../components/createCv/CreateCvSixth';
import CreateCvSeventh from '../components/createCv/CreateCvSeventh';
import CreateCvFinal from '../components/createCv/CreateCvFinal';

function CreateCv() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({
    experience: '',
    goal: '',
    profRole: '',
    language: [],
    school: '',
    degree: '',
    datesAttended: '',
    services: '',
    hourlyRate: '',
    skills: [],
    bio: '',
    country: '',
    fullAddress: '',
    city: '',
    geometry: {
      latitude: '',
      longitude: '',
    },
    phoneNumber: undefined,
    avatar: '',
  });
  if (data === 5) {
    setData(8);
  }
  return (
    <View style={styles.container}>
      <LogoView />
      {count === 1 && <CreateCvFirst title="What level of experience will it need?" levels={['Entry', 'Intermediate', 'Expert']} /> }
      {count === 2 && <CreateCvFirst title="What’s Your Goal" levels={['To Earn Main Income', 'To Make Money On the Side', 'I Don’t Have a Goal in mind']} /> }
      {count === 3 && <CreateCvSecond /> }
      {count === 4 && <CreateCvThird /> }
      {count === 5 && <CreateCvFourth /> }
      {count === 6 && <CreateCvFifth /> }
      {count === 7 && <CreateCvSixth /> }
      {count === 8 && <CreateCvSeventh /> }
      {count === 9 && <CreateCvFinal /> }
      <View style={styles.btnBlock}>
        {count !== 1 && (
          <Text onPress={() => setCount(count - 1)} style={styles.btnText}>
            Go Back
          </Text>
        )}
        {count <= 8 && (
        <Text onPress={() => setCount(count + 1)} style={{ ...styles.btnText, marginLeft: 'auto' }}>
          Skip For Now
        </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: RW(20),
    paddingTop: RH(10) + StatusBar.currentHeight,
    paddingBottom: RH(20),
    backgroundColor: INDIGO_BLUE,
  },
  btnBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
  },
  btnText: {
    color: WHITE,
    fontFamily: 'Lato-Bold',
    fontSize: RW(14),
  },
});
export default CreateCv;
