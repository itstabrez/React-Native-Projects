import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ForgotPasswordScreen from './ForgotPasswordScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  type LoginScreenProps = StackScreenProps<RootStackParamList>;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown:false}}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Register" component={RegistrationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}