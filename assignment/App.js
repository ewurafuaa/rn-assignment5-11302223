import React from 'react';
import { StyleSheet, View } from 'react-native';
import Settings from './Settings/Settings';

export default function App() {
  return (
    <View style={styles.container}>
      <Settings/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
