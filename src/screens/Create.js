import React from 'react';
import { View } from 'react-native';
import CreateJob from '../layouts/CreateJob';

function Create() {
  const role = 'gorcTvox';
  return (
    <View style={{ flex: 1 }}>
      {role === 'gorcTvox' && <CreateJob />}
    </View>
  );
}

export default Create;
