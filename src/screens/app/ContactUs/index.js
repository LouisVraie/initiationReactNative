import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';

export default function ContactUs() {

  return (
    <ScrollView>
      <AuthHeader title='Contact Us'/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}