import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../../theme/colors';

function UltraSmallText({ text, top = 0, size = 14 }) {
  return (
    <View>
      <Text style={[styles.text, { marginTop: top, fontSize: size }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-SemiBold',
    color: WHITE,
    fontStyle: 'normal',
  },
});

export default UltraSmallText;
