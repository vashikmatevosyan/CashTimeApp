import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { BLACK, WHITE } from '../../theme/colors';
import { RW } from '../../helpers/ratio';

function JobsInputs({
  value, setValue, width, keyboardType = 'default', top,
}) {
  return (
    <View style={{ width: '100%' }}>
      <TextInput
        keyboardType={keyboardType}
        value={value}
        onChangeText={setValue}
        style={[styles.input, { width, marginTop: top }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: WHITE,
    borderColor: WHITE,
    borderRadius: 8,
    fontFamily: 'Lato-Regular',
    color: BLACK,
    fontSize: RW(16),
  },
});

export default JobsInputs;
