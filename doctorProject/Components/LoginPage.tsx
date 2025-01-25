import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import StringUtils from '../Utils/StringUtils';
import ColorUtils from '../Utils/ColorUtils';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';

type LoginScreenProps = {
  navigation: StackNavigationProp<ParamListBase, "Login">; 
};
export default function LoginPage({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

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

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Login successful!');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri : 'Assets/SVG/healthcare.svg'}}/>
      <Text style={styles.title}>{StringUtils.WELCOME_MESSAGE}</Text>
      <View style = {styles.secondTitle}>
        <Text style={styles.generalText}>to </Text>
        <Text style={styles.coloredTitle}>{StringUtils.APP_NAME}</Text>
      </View>
      <TextInput
        style={[styles.input , errors.email && styles.errorInput]}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      <TextInput
        style={[styles.input , errors.password && styles.errorInput]}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>{StringUtils.LOGIN_BUTTON}</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>{StringUtils.FORGOT_PASSWORD}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>{StringUtils.REGISTER}</Text>
        </TouchableOpacity>
      </View>
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
    textAlign: 'center',
  },
  generalText : {
    fontSize: 28,
    fontWeight: 'bold',
  },
  secondTitle: {
    marginBottom: 20,
    flexDirection : 'row',
    justifyContent : 'center',
  },
  coloredTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color : ColorUtils.BUTTON_COLOR
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginBottom: 15,
    backgroundColor: '#EAF0F1',
  },
  button: {
    marginTop : 10,
    backgroundColor: ColorUtils.BUTTON_COLOR,
    padding: 16,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 40,
    width: "60%",
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  errorText: {
    color: ColorUtils.BUTTON_COLOR,
    fontSize: 12,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: ColorUtils.BUTTON_COLOR,
    borderWidth: 1,
    marginBottom: 8,
  },
  link: {
    color: ColorUtils.BUTTON_COLOR,
    textDecorationLine: 'underline',
  },
});