import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ColorUtils from '../Utils/ColorUtils';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  style?: object;
  textStyle?: object;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default CustomButton;