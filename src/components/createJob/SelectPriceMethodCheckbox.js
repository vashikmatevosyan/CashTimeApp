import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import SmallTextsCreateJob from './SmallTextsCreateJob';
import CheckBoxIcon from './CheckBoxIcon';
import { WHITE } from '../../theme/colors';
import { RH } from '../../helpers/ratio';

function SelectPriceMethodCheckbox({ item, selectedMethod, setSelectedMethod }) {
  return (
    <View style={styles.checkboxContainer}>
      <SmallTextsCreateJob text={item} size={14} />
      <CheckBox
        onPress={() => setSelectedMethod(item)}
        right
        checked
        containerStyle={styles.checkbox}
        checkedIcon={(
          <CheckBoxIcon
            checked={selectedMethod === item}
            bw={40}
            bh={40}
            sh={20}
            sw={20}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '45%',
    position: 'relative',
    height: RH(80),
    paddingHorizontal: 5,
    borderRadius: 27,
    marginTop: RH(30),
  },
  checkbox: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    position: 'absolute',
    right: 0,
    borderWidth: 0,
  },
});

export default SelectPriceMethodCheckbox;
