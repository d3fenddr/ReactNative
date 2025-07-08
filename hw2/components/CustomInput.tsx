import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  placeholder: string;
  secureTextEntry?: boolean;
};

const CustomInput = ({ placeholder, secureTextEntry = false }: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12
  },
});

export default CustomInput;
