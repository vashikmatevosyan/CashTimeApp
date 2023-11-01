import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RH, RW } from '../../helpers/ratio';
import { ORANGE } from '../../theme/colors';
import SvgComponentChecked from '../imagesSvgComponents/SvgComponentChecked';

function CheckBoxIcon({
  checked, bw, bh, sw, sh,
}) {
  return (
    <View style={[styles.circle, {
      width: RW(bw),
      height: RH(bh),
    }]}
    >
      <View style={[styles.square, {
        width: RW(sw),
        height: RH(sh),
      }]}
      />
      <View style={styles.checked}>
        {checked && <SvgComponentChecked />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: RH(100),
    backgroundColor: 'rgba(103, 80, 164, 0.08)',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    backgroundColor: ORANGE,
    borderRadius: 5,
  },
  checked: {
    position: 'absolute',
  },
});

export default CheckBoxIcon;
