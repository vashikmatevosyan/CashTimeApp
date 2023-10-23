import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import { BLACK, ORANGE } from '../../theme/colors';

function BottomIconTitle({ text, active }) {
  return (
    <View>
      <Text style={[styles.text, { color: active ? ORANGE : BLACK }]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-SemiBold',
    fontSize: RW(14),
    marginTop: RH(15),
  },
});

export default BottomIconTitle;
