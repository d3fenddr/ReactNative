import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

const CustomButton = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});

export default CustomButton;
