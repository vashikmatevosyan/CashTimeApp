import React, { useState } from 'react';
import {
  StyleSheet, TextInput, View,
} from 'react-native';
import { RH } from '../../helpers/ratio';
import CreateJobsTitles from './CreateJobsTitles';
import { WHITE } from '../../theme/colors';

function StepFive() {
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <CreateJobsTitles title="Describe your job" align="center" />
      <View style={styles.inputContainer}>
        <TextInput
          value={description}
          onChangeText={setDescription}
          multiline
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: RH(40),
    width: '95%',
    position: 'relative',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: 25,
    borderStyle: 'solid',
    height: '70%',
  },
});

export default StepFive;
