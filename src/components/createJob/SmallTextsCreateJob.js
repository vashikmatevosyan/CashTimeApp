import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { BLACK } from '../../theme/colors';

function SmallTextsCreateJob({ text = '', size }) {
  return (
    <View>
      <Text style={[styles.text, { fontSize: size }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: BLACK,
    fontFamily: 'Lato-SemiBold',
    fontWeight: '800',
  },
});

export default SmallTextsCreateJob;
