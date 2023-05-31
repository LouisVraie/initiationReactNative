import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import Header from '../../../components/Header';

export default function PrivacyAndTerms() {

  return (
    <ScrollView>
      <Header title='Privacy & Terms'/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}