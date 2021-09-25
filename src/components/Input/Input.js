import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import styles from './Input.style';

const Input = ({placeholder, onType, value, isSecure}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry={isSecure}
        placeholder={placeholder}
        onChangeText={onType}
        placeholderTextColor = 'white'
        value={value}></TextInput>
    </SafeAreaView>
  );
};

export default Input;
