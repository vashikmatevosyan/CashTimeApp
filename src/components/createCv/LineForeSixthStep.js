import React, { useState } from 'react';
import {
  StyleSheet, TextInput, View, Text,
} from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import {
  BLACK, DARK_GREY, LIGHT_GREY, WHITE,
} from '../../theme/colors';

function LineForeSixthStep(props) {
  const { text } = props;
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.line}>
      <Text style={styles.text}>{text}</Text>
      <TextInput keyboardType="numeric" placeholder="0.00" onChangeText={(e) => setInputValue(e)} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    marginBottom: RH(30),
  },
  input: {
    borderWidth: 1,
    backgroundColor: LIGHT_GREY,
    borderColor: LIGHT_GREY,
    width: '90%',
    paddingLeft: RW(20),
    borderRadius: RW(8),
    fontFamily: 'Lato-Regular',
    color: BLACK,
    fontSize: RW(14),
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(20),
    color: BLACK,
    marginBottom: RH(20),
  },
});

export default LineForeSixthStep;
