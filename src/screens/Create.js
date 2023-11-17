import React from 'react';
import { View } from 'react-native';
import CreateJob from '../layouts/CreateJob';
import Test from '../components/createJob/test';

function Create() {
  const role = 'gorcTvox';
  return (
    <View style={{ flex: 1 }}>
      {role === 'gorcTvox' && <CreateJob />}
      {role === 'x' && <Test />}
    </View>
  );
}

export default Create;
