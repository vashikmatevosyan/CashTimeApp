import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import {
  BLACK, DARK_GREY, GREY, INPUT, LIGHT_GREY, ORANGE, WHITE,
} from '../../theme/colors';

function LineForSeventhStep(props) {
  const { text } = props;
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.inputBlock}>
      <Text style={styles.text}>{text}</Text>
      <TextInput value={inputValue} onChangeText={(e) => setInputValue(e)} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: INPUT,
    width: '100%',
    paddingLeft: RW(20),
    borderRadius: RW(8),
    fontFamily: 'Lato-Regular',
    color: DARK_GREY,
    fontSize: RW(16),
  },
  inputBlock: {
    width: '100%',
    marginBottom: RH(17),
  },
  text: {
    color: BLACK,
    fontFamily: 'Lato-Regular',
    fontSize: RW(14),
    marginBottom: RW(5),
    marginLeft: RW(5),
  },
});
export default LineForSeventhStep;
