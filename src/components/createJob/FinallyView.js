import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import { DARK_BLUE, ORANGE, WHITE } from '../../theme/colors';
import SvgComponentsJobFinallyFirst from '../imagesSvgComponents/SvgComponentsJobFinallyFirst';
import SvgComponentsJobFinallySecond from '../imagesSvgComponents/SvgComponentsJobFinallySecond';
import SvgComponentsJobFinallyThird from '../imagesSvgComponents/SvgComponentsJobFinallyThird';
import SvgComponentDefaultImage from '../imagesSvgComponents/SvgComponentDefaultImage';
import SvgComponentPain from '../imagesSvgComponents/SvgComponentPain';
import CreateJobsTitles from './CreateJobsTitles';

function FinallyView() {
  return (
    <>
      <View style={styles.imageFirst}>
        <SvgComponentsJobFinallyFirst />
      </View>
      <View style={styles.imageSecond}>
        <SvgComponentsJobFinallySecond />
      </View>
      <View style={styles.imageThird}>
        <SvgComponentsJobFinallyThird />
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.finallyRow}>
            <View style={styles.imageBlock}>
              <SvgComponentDefaultImage />
            </View>
            <SvgComponentPain />
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <CreateJobsTitles width="100%" title="Post This Job" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageFirst: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    top: 10,
  },
  imageSecond: {
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: -1,
  },
  imageThird: {
    position: 'absolute',
    left: 0,
    bottom: 10,
    zIndex: -1,
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    marginTop: RH(40),
    width: '95%',
    position: 'relative',
  },
  content: {
    backgroundColor: WHITE,
    borderRadius: 25,
    padding: 10,
  },
  finallyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageBlock: {
    width: RW(100),
    height: RH(100),
    backgroundColor: ORANGE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    justifyContent: 'center',
    marginTop: 'auto',
    alignItems: 'center',
    backgroundColor: DARK_BLUE,
    paddingVertical: 15,
    borderRadius: 25,
  },
});

export default FinallyView;
