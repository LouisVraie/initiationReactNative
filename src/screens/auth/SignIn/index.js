import React, { useContext, useEffect, useState } from 'react';
import { styles } from './styles';
import { Alert, ScrollView, View } from 'react-native';
import Input from '../../../components/Input';
import LinedText from '../../../components/LinedText';
import Link from '../../../components/Link';
import Button from '../../../components/Button';
import { UserContext } from '../../../../App';
import GoogleButton from '../../../components/GoogleButton';

export default function SignIn({ navigation }) {
  const { setUser } = useContext(UserContext);

  const [values, setValues] = useState({});

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  };

  const onSubmit = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

          username: values.name,
          password: values.password,
          // expiresInMins: 60, // optional
        })
      });

      const data = await response.json();
      if (data?.token) {
        setUser(data);
        navigation.navigate('BottomTabs');
      } else {
        Alert.alert(data.message);
      }

    } catch (error) {
      console.error('Error when signing in', error);
    }
  };

  useEffect(() => {
    setValues({
      name: 'kminchelle',
      password: '0lelplR'
    });
  }, []);
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
          label='Password'
          inputMode='text'
          placeholder='********'
          isPassword
          value={values?.password}
          onChangeText={v => onChange('password', v)}
        />
        <Button title='Sign In' onPress={onSubmit} />

        <LinedText text='Or sign in with'/>

        <GoogleButton />

        <Link
          prefix={'Don\'t have an account?'}
          style={styles.linkContainer}
          prefixStyle={styles.prefixStyle}
          title='Sign Up'
          onPress={onSignUp}
        />
      </View>
    </ScrollView>
  );
}