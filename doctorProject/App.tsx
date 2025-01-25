import React from 'react';
import { StyleSheet , SafeAreaView } from 'react-native';
import StackNavigator from './Components/StackNavigator';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StackNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});