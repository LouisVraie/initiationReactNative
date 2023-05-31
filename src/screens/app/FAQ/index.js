import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import Header from '../../../components/Header';

export default function FAQ() {

  return (
    <ScrollView>
      <Header title='FAQ'/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}