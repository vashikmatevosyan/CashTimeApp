import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import {
  BLACK, DARK_GREY, GREY, LIGHT_GREY, WHITE,
} from '../../theme/colors';
import LineForeSixthStep from './LineForeSixthStep';

function CreateCvSixth() {
  return (
    <View style={styles.container}>
      <View style={styles.contentBlock}>
        <Text style={styles.title}>GNow Set Your Hourly Rate</Text>
        <LineForeSixthStep text="Hourly rate" />
        <LineForeSixthStep text="You’ll Get" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(80),
    width: '100%',
  },
  contentBlock: {
    backgroundColor: WHITE,
    width: '100%',
    height: '90%',
    borderRadius: RW(20),
    paddingHorizontal: RW(15),
    paddingTop: RH(30),
    // overflow: 'hidden',
  },
  input: {
    borderWidth: 1,
    backgroundColor: LIGHT_GREY,
    borderColor: LIGHT_GREY,
    width: '90%',
    paddingLeft: RW(20),
    borderRadius: RW(8),
    fontFamily: 'Lato-Regular',
    color: DARK_GREY,
    fontSize: RW(16),
  },
  inputBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: LIGHT_GREY,
    borderColor: LIGHT_GREY,
    width: '100%',
    borderRadius: RW(8),
    fontFamily: 'Lato-Regular',
    color: DARK_GREY,
    fontSize: RW(16),
    paddingRight: RW(5),
  },
  text: {
    color: BLACK,
    fontFamily: 'Lato-Regular',
    fontSize: RW(14),
    marginBottom: RW(5),
  },

  title: {
    fontFamily: 'Lato-Bold',
    fontSize: RW(24),
    color: BLACK,
    marginBottom: RH(45),
  },
});

export default CreateCvSixth;
