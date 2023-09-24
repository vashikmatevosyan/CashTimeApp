import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Home() {
  return (
    <View>
      <Text style={styles.container}>Home</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fontFamily: 'Lato-Bold',
  },
});
export default Home;
