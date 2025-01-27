import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';
import StringUtils from '../Utils/StringUtils';
import ColorUtils from '../Utils/ColorUtils';
import CustomButton from '../Components/CustomButton';
import CustomInputTextField from '../Components/InputTextField';
import { ScrollView } from 'react-native-gesture-handler';

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
      navigation.navigate(StringUtils.APPOINTMENT_PAGE)
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled"
    keyboardDismissMode="on-drag">
      <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      <View style={styles.container}>
      <Text style={styles.title}>{StringUtils.WELCOME_MESSAGE}</Text>
      <View style = {styles.secondTitle}>
        <Text style={styles.generalText}>to </Text>
        <Text style={styles.coloredTitle}>{StringUtils.APP_NAME}</Text>
      </View>
      <CustomInputTextField
        label="Email"
        placeholder="Email"
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
      <CustomButton onPress={handleSubmit} title={StringUtils.LOGIN_BUTTON}/>
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(StringUtils.FORGOT_PASSWORD_SCREEN)}>
          <Text style={styles.link}>{StringUtils.FORGOT_PASSWORD}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(StringUtils.REGISTER_SCREEN)}>
          <Text style={styles.link}>{StringUtils.REGISTER}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%', 
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain', 
    alignSelf: 'center',
    marginBottom : '5%'
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
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  link: {
    color: ColorUtils.BUTTON_COLOR,
    textDecorationLine: 'underline',
  },
});