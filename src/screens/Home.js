import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SlideToUnlock from './no-singn-up-screens/SlideToUnlock';

function Home() {
  return (
    <View>
      <Text style={styles.container}>Home</Text>
      <SlideToUnlock />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lato-Bold',
  },
});
export default Home;
