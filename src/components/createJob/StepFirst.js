import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { WHITE } from '../../theme/colors';
import { RH, RW } from '../../helpers/ratio';
import CreateJobsTitles from './CreateJobsTitles';
import JobsInputs from './JobsInputs';
import UltraSmallText from './UltraSmallText';

function StepFirst() {
  const [jobTitle, setJobTitle] = useState('');
  return (
    <View style={styles.container}>
      <CreateJobsTitles title="Write a title for your job post" align="center" />
      <JobsInputs top={RH(20)} value={jobTitle} setValue={setJobTitle} width="100%" />
      <UltraSmallText text="Example titles" top={RH(20)} size={RW(18)} />
      <View style={styles.titlesBox}>
        <Text style={styles.dot} />
        <Text style={[styles.titles, { width: RW(300) }]}>
          Build responsive WordPress site with booking/payment functionality
        </Text>
      </View>
      <View style={styles.titlesBox}>
        <Text style={styles.dot} />
        <Text style={[styles.titles, { width: RW(300) }]}>
          Graphic designer needed to design ad creative for multiple campaigns
        </Text>
      </View>
      <View style={styles.titlesBox}>
        <Text style={styles.dot} />
        <Text style={[styles.titles, { width: RW(300) }]}>
          Facebook ad specialist needed for product launch
        </Text>
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
  },
  titles: {
    marginTop: RH(10),
    fontFamily: 'Lato-Regular',
    fontSize: RW(18),
    color: WHITE,
  },
  dot: {
    width: RW(10),
    height: RH(10),
    backgroundColor: WHITE,
    borderRadius: 10,
  },
  titlesBox: {
    marginTop: RH(40),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default StepFirst;
