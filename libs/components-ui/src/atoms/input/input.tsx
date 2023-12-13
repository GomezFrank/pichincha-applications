import React, {ReactElement} from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: undefined | string;
  maxLength: undefined | number;
  inputStyle?: object;
}

const Input = ({
  placeholder,
  onChangeText,
  value,
  maxLength = 120,
  inputStyle,
}: InputProps): ReactElement => {
  return (
    <TextInput
      style={[styles.textInputStyles, inputStyle]}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="default"
      returnKeyType="done"
      maxLength={maxLength}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyles: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 8,
  },
});

export {Input};
