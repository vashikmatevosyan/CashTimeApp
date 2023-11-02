import React from 'react';
import { View } from 'react-native';
import CreateJob from '../layouts/CreateJob';
import CreateCv from './CreateCv';

function Create() {
  const role = 'gorcTvox';
  return (
    <View style={{ flex: 1 }}>
      {role === 'gorfcTvox' ? <CreateJob /> : <CreateCv />}
    </View>
  );
}

export default Create;
