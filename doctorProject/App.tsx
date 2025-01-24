import React from 'react';
import { StyleSheet , SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Components/LoginPage';
import ForgotPasswordScreen from './Components/ForgotPasswordScreen';
import RegistrationPage from './Components/RegistrationPage';
import StackNavigator from './Components/StackNavigator';
import { ScrollView } from 'react-native-gesture-handler';



// Define the parameter list for the navigator
export type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
  Register: undefined;
};

// Create a typed stack navigator
const Stack = createStackNavigator<RootStackParamList>();

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
    backgroundColor: '#fff',
  },
});