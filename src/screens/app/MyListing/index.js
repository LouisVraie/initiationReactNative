import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import Header from '../../../components/Header';

export default function MyListing() {

  return (
    <ScrollView>
      <Header title='My Listing'/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}