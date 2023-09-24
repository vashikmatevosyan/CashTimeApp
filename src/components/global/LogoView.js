import React from 'react';
import { StyleSheet, View } from 'react-native';
import SvgComponentLogo from '../imagesSvgComponents/SvgComponentLogo';

function LogoView() {
  return (
    <View style={styles.container}>
      <SvgComponentLogo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default LogoView;
