import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WHITE } from '../../theme/colors';
import { RW } from '../../helpers/ratio';

function CreateJobsTitles({
  title, align, width = '100%', color = WHITE,
}) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={[styles.text, { textAlign: align, width, color }]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: RW(24),
    fontFamily: 'Lato-Bold',
    width: '70%',
  },
});

export default CreateJobsTitles;
