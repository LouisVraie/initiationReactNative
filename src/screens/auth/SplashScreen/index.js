/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Button from '../../../components/Button';
import Link from '../../../components/Link';
import splashScreenLogo from '../../../assets/splash_image.png';
import { Image, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';


export default function SplashScreen({ navigation }) {

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <View style={styles.container}>

        <Image
          resizeMode='contain'
          style={styles.image}
          source={splashScreenLogo}
        />

        <View style={styles.innerContainer}>
          <Text style={styles.title}>You'll Find</Text>
          <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
          <Text style={styles.title}>Here</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title='Sign Up' onPress={onSignUp}/>
        </View>
        <Link title='Sign In' onPress={onSignIn}/>
      </View>
    </ScrollView>
  );
}

