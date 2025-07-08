import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';

const LoginForm = () => {
  return (
    <View>
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" secureTextEntry />
      <CustomButton title="Log In" />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  forgot: { color: 'green', textAlign: 'center', marginTop: 10 },
});

export default LoginForm;
