import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import { BLACK, WHITE } from '../../theme/colors';
import { RH, RW } from '../../helpers/ratio';

function StepFirts() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Write a title for your job post
      </Text>
      <TextInput style={styles.input} />
      <Text style={[styles.titles, { marginTop: 20 }]}>
        Example titles
      </Text>
      <View style={styles.titlesBox}>
        <Text style={styles.dot} />
        <Text style={[styles.titles, { width: RW(350) }]}>
          Build responsive WordPress site with booking/payment functionality
        </Text>
      </View>
      <View style={styles.titlesBox}>
        <Text style={styles.dot} />
        <Text style={[styles.titles, { width: RW(350) }]}>
          Graphic designer needed to design ad creative for multiple campaigns
        </Text>
      </View>
      <View style={styles.titlesBox}>
        <Text style={styles.dot} />
        <Text style={[styles.titles, { width: RW(350) }]}>
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
  },
  text: {
    color: WHITE,
    fontSize: RW(24),
    fontFamily: 'Lato-Bold',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    backgroundColor: WHITE,
    borderColor: WHITE,
    borderRadius: 8,
    fontFamily: 'Lato-Regular',
    color: BLACK,
    fontSize: 14,
    marginTop: 20,
    width: RW(380),
  },
  titles: {
    marginTop: 10,
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: WHITE,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: WHITE,
    borderRadius: 10,
  },
  titlesBox: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default StepFirts;
