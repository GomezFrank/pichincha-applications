import React, {ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface ButtonProps {
  name: string;
  onButtonPress: () => void;
  buttonStyle?: object;
}

const Button = ({
  name,
  onButtonPress,
  buttonStyle,
}: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={[styles.buttonContainer, buttonStyle]}>
      <Text style={styles.buttonTextStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    borderRadius: 4,
    backgroundColor: 'purple',
  },
  buttonTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export {Button};