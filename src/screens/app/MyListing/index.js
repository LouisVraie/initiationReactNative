import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';

export default function MyListing() {

  return (
    <ScrollView>
      <AuthHeader title='My Listing'/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}