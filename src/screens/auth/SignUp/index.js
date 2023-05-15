/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import Input from '../../../components/Input';

export default function SignUp() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Input label='Name' inputMode='text' placeholder='John Doe' />
        <Input label='E-mail' inputMode='email' placeholder='example@gmail.com' />
        <Input label='Password' inputMode='text' placeholder='********' isPassword={true} />
        <Button title='Sign Up' onPress={() => console.log('first')} />
        <Link title='Sign In' onPress={() => console.log('second')} />
      </View>
    </ScrollView>
  );
}

