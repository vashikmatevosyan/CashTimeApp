import React, { useState } from 'react';
import {
  StatusBar, StyleSheet, Text, View,
} from 'react-native';
import { INDIGO_BLUE, WHITE } from '../theme/colors';
import { RH, RW } from '../helpers/ratio';
import LogoView from '../components/global/LogoView';

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
      <View style={styles.btnBlock}>
        {count !== 1 && (
          <Text onPress={() => setCount(count - 1)} style={styles.btnText}>
            Go Back
          </Text>
        )}
        <Text onPress={() => setCount(count + 1)} style={{ ...styles.btnText, marginLeft: 'auto' }}>
          Skip For Now
        </Text>
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
