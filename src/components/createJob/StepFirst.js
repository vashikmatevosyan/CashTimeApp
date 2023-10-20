import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import { BLACK, WHITE } from '../../theme/colors';
import { RH, RW } from '../../helpers/ratio';

function StepFirst() {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Write a title for your job post
      </Text>
      <TextInput value={text} onChangeText={setText} style={styles.input} />
      <Text style={[styles.titles, { marginTop: RH(20) }]}>
        Example titles
      </Text>
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
    fontSize: RW(16),
    marginTop: RH(20),
    width: RW(380),
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
