/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import { ScrollView, View, Text } from 'react-native';
import { styles } from './styles';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';

export default function SignUp({ navigation }) {

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input label='Name' inputMode='text' placeholder='John Doe' />
        <Input label='E-mail' inputMode='email' placeholder='example@gmail.com' />
        <Input label='Password' inputMode='text' placeholder='********' isPassword />
        <Checkbox>
          <Text style={styles.text}>I agree with <Text style={styles.checkboxTextBold}>Terms</Text> & <Text style={styles.checkboxTextBold}>Privacy</Text></Text>
        </Checkbox>

        <Button title='Sign Up' onPress={() => console.log('first')} />

        <Link
          prefix='Already have an account? '
          style={styles.linkContainer}
          prefixStyle={styles.prefixStyle}
          title='Sign In'
          onPress={onSignIn}
        />
      </View>
    </ScrollView>
  );
}

