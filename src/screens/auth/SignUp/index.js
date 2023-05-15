/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import { ScrollView, View, Text } from 'react-native';
import { styles } from './styles';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

export default function SignUp({ navigation }) {

  const [isChecked, setIsChecked] = useState(false);

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input label='Name' inputMode='text' placeholder='John Doe' />
        <Input label='E-mail' inputMode='email' placeholder='example@gmail.com' />
        <Input label='Password' inputMode='text' placeholder='********' isPassword />
        <Checkbox checked={isChecked} onCheck={setIsChecked}>
          <Text style={styles.text}>I agree with <Text style={styles.checkboxTextBold}>Terms</Text> & <Text style={styles.checkboxTextBold}>Privacy</Text></Text>
        </Checkbox>

        <Button title='Sign Up' onPress={() => console.log('first')} />

        <View style={styles.lineTextContainer}>
          <View style={styles.line} />
          <Text style={styles.text}> Or sign up with </Text>
          <View style={styles.line} />
        </View>

        <GoogleSigninButton
          style={styles.googleSignIn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
        />

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

