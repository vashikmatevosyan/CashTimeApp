import React, { useState } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { RH, RW } from '../../helpers/ratio';
import { WHITE } from '../../theme/colors';
import SmallTextsCreateJob from '../createJob/SmallTextsCreateJob';
import CheckBoxIcon from '../createJob/CheckBoxIcon';
import CreateJobsTitles from '../createJob/CreateJobsTitles';

function CreateCvFirst({ levels, title }) {
  const [checked, setChecked] = useState();
  return (
    <View style={styles.container}>
      <CreateJobsTitles title={title} align="center" />
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
    marginTop: RH(150),
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
    borderRadius: RW(35),
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

export default CreateCvFirst;
