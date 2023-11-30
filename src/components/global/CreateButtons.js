import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { WHITE } from '../../theme/colors';

function CreateButtons({ handleChangeStep }) {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={() => handleChangeStep('-')}>
        <Text style={styles.btn}>
          Go Back
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChangeStep('+')}>
        <Text style={styles.btn}>
          Skip For Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    fontFamily: 'Lato-Bold',
    color: WHITE,
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
    // marginBottom: RH(20),
  },
});

export default CreateButtons;
