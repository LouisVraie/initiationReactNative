import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils/colors';

export default function Input(props) {
  const { label, isPassword, style } = props;
  return (
    <View style={styles.container}>

      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={isPassword}
        />
      </View>
    </View>
  );
}

