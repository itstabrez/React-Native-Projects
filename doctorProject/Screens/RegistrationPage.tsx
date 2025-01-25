import { StyleSheet, Text, View , Alert , TextInput , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Components/CustomButton';
import StringUtils from '../Utils/StringUtils';
import CustomInputTextField from '../Components/InputTextField';

export default function RegistrationPage() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [errors, setErrors] = useState({ email: '' , password: '' , confirmPassword : ''});
    const validate = () => {
          let valid = true;
          const newErrors = { email: '' , password : '' , confirmPassword : ''};
      
          if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Enter a valid email address';
            valid = false;
          }
          if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
          } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            valid = false;
          }
          if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
            valid = false;
          } else if (confirmPassword.length < 6) {
            newErrors.confirmPassword = 'Password must be at least 6 characters';
            valid = false;
          }
          setErrors(newErrors);
        return valid;
      };
      
    const handleRegister = () => {
      if(validate()){
        if (password !== confirmPassword) {
          Alert.alert('Error', 'Passwords do not match.');
          return;
        }
        Alert.alert('Registration Successful', `Welcome, ${email}!`);
      }
    };
    return (
        <View style={styles.container}>
          <Text style={styles.title}>{StringUtils.REGISTER}</Text>
          <CustomInputTextField
          label="Email"
          placeholder="Enter Your Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          error={errors.email}
          autoCapitalize="none"
        />
        <CustomInputTextField
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={errors.password}
        autoCapitalize="none"
      />
      <CustomInputTextField
        label="Password"
        placeholder="Enter Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        error={errors.password}
        autoCapitalize="none"
      />
      <CustomButton onPress={handleRegister} title={StringUtils.REGISTER}/>
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
  });