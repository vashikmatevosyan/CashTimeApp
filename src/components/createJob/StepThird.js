import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useSelector } from 'react-redux';
import CreateJobsTitles from './CreateJobsTitles';
import { RH } from '../../helpers/ratio';
import CheckBoxIcon from './CheckBoxIcon';
import { WHITE } from '../../theme/colors';
import SmallTextsCreateJob from './SmallTextsCreateJob';

function StepThird({ onData }) {
  const thirdFormLevel = useSelector((state) => state.createJobForm.dataFromChild3) ?? '';
  const [checked, setChecked] = useState(thirdFormLevel || 'Entry');
  const levels = ['Entry', 'Intermediate', 'Expert'];
  useEffect(() => {
    onData({ dataFromChild3: checked });
  }, [checked]);
  return (
    <View style={styles.container}>
      <CreateJobsTitles title="What level of experience will it need?" align="center" />
      <View>
        {levels.map((e) => (
          <View key={e} style={styles.checkboxContainer}>
            <SmallTextsCreateJob text={e} size={18} />
            <CheckBox
              onPress={() => setChecked(e)}
              right
              checked
              containerStyle={styles.checkbox}
              checkedIcon={(
                <CheckBoxIcon
                  checked={checked === e}
                  bw={65}
                  bh={65}
                  sh={35}
                  sw={35}
                />
              )}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(40),
    width: '90%',
  },
  checkboxContainer: {
    backgroundColor: WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    height: RH(80),
    borderRadius: 27,
    marginTop: RH(30),
  },
  checkbox: {
    width: '100%',
    justifyContent: 'center',
    height: '99%',
    position: 'absolute',
    borderWidth: 0,
  },
});

export default StepThird;
