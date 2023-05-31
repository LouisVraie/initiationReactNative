import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import Header from '../../../components/Header';

export default function ContactUs() {

  return (
    <ScrollView>
      <Header title='Contact Us'/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}