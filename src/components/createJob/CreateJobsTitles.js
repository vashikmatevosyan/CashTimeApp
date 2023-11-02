import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../../theme/colors';
import { RW } from '../../helpers/ratio';

function CreateJobsTitles({ title, align }) {
  return (
    <View>
      <Text style={[styles.text, { textAlign: align }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: WHITE,
    fontSize: RW(24),
    fontFamily: 'Lato-Bold',
  },
});

export default CreateJobsTitles;
