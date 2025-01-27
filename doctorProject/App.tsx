import React from 'react';
import { StyleSheet , SafeAreaView } from 'react-native';
import StackNavigator from './lib/Navigator/StackNavigator';

export type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  Register: undefined;
  AppointmentPage: undefined;
};
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