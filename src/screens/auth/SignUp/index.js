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
import { GoogleSigninButton, } from '@react-native-google-signin/google-signin';
import LinedText from '../../../components/LinedText';

export default function SignUp({ navigation }) {

  const [values, setValues] = useState({});
  const [isChecked, setIsChecked] = useState(false);

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          label='Name'
          inputMode='text'
          placeholder='John Doe'
          value={values?.name}
          onChangeText={v => onChange('name', v)}
        />
        <Input
          label='E-mail'
          inputMode='email'
          placeholder='example@gmail.com'
          value={values?.email}
          onChangeText={v => onChange('email', v)}
        />
        <Input
          label='Password'
          inputMode='text'
          placeholder='********'
          isPassword
          value={values?.password}
          onChangeText={v => onChange('password', v)}
        />
        <Checkbox checked={isChecked} onCheck={setIsChecked}>
          <Text style={styles.text}>I agree with <Text style={styles.checkboxTextBold}>Terms</Text> & <Text style={styles.checkboxTextBold}>Privacy</Text></Text>
        </Checkbox>

        <Button title='Sign Up' onPress={() => console.log('first')} />

        <LinedText text='Or sign up with' />

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

