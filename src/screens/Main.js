import React from 'react';
import {
  StatusBar, StyleSheet, Text, View,
} from 'react-native';

function Main() {
  return (
    <View style={{ paddingTop: StatusBar.currentHeight + 10 }}>
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

export default Main;
