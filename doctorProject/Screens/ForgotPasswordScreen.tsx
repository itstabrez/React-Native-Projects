import { StyleSheet, Text, View ,TouchableOpacity , TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Components/CustomButton';
import CustomInputTextField from '../Components/InputTextField';

export default function ForgotPasswordScreen() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ email: ''});
    const validate = () => {
      let valid = true;
      const newErrors = { email: '' };
  
      if (!email) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Enter a valid email address';
        valid = false;
      }
      setErrors(newErrors);
    return valid;
  };
  
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Reset Password</Text>
        <CustomInputTextField
        label="Email"
        placeholder="Enter Your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        error={errors.email}
        autoCapitalize="none"
        style = {styles.marginTop}
      />
          <CustomButton onPress={validate} title="Reset Password"/>
        </View>
      );
    }

  
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          backgroundColor: '#fff',
        },
        title: {
          fontSize: 28,
          fontWeight: 'bold',
          marginBottom: 20,
          textAlign: 'center',
        },
        marginTop : {
          marginTop : 10,
        }
      });