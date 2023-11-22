import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DARK_BLUE } from '../../theme/colors';

function LanguageCircle() {
  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: DARK_BLUE,
  },
});

export default LanguageCircle;
