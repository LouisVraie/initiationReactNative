import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';

export default function FAQ() {

  return (
    <ScrollView>
      <AuthHeader title='FAQ'/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}