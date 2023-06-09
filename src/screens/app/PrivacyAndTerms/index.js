import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';

export default function PrivacyAndTerms() {

  return (
    <ScrollView>
      <AuthHeader title='Privacy & Terms'/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}