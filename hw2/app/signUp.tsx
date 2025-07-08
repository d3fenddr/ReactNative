import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const SignUpForm = () => {
  return (
    <View>
      <CustomInput placeholder="Name" />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>
          I would like to receive your newsletter and other promotional information.
        </Text>
      </View>
      <CustomButton title="Sign Up" />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: { marginVertical: 10 },
  checkboxLabel: { color: '#666' },
  forgot: { color: 'green', textAlign: 'center', marginTop: 10 },
});

export default SignUpForm;
