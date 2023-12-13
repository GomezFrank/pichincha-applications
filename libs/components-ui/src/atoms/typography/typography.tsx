import React, {ReactElement} from 'react';
import {StyleSheet, Text} from 'react-native';

interface TypographyProps {
  text: string;
  textStyle?: object;
}

const Typography = ({text, textStyle}: TypographyProps): ReactElement => {
  return <Text style={[styles.text, textStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#839',
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'left',
  },
});

export {Typography};
