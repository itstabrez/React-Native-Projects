import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import ColorUtils from '../Utils/ColorUtils';

type CustomInputTextFieldProps = TextInputProps & {
  label?: string;
  error?: string; 
};

const CustomInputTextField: React.FC<CustomInputTextFieldProps> = ({ 
  label, 
  error, 
  style, 
  ...props 
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput 
        style={[styles.input, style, error && styles.errorInput]} 
        {...props} 
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 18,
    marginBottom: 15,
    backgroundColor: '#EAF0F1',
  },
  errorInput: {
    borderColor: ColorUtils.BUTTON_COLOR,
    borderWidth: 1,
    marginBottom: 8,
  },
  errorText: {
    color: ColorUtils.BUTTON_COLOR,
    fontSize: 12,
  },
});

export default CustomInputTextField;