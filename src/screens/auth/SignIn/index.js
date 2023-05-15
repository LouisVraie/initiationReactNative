import React from 'react';
import { styles } from './styles';
import { View } from 'react-native';
import Input from '../../../components/Input';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Input></Input>
    </View>
  );
}