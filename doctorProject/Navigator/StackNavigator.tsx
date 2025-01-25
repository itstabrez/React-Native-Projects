import React from 'react';
import LoginPage from '../Screens/LoginPage';
import RegistrationPage from '../Screens/RegistrationPage';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown:false}}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Reset Password' }} />
        <Stack.Screen name="Register" component={RegistrationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}