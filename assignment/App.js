import { ScrollView, StyleSheet, View } from 'react-native';
import HomePage from './HomePage/HomePage';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <HomePage/>
    </View>
    </ScrollView>
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
