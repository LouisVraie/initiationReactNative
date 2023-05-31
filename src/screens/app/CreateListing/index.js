import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import Header from '../../../components/Header';

export default function CreateListing({ navigation }) {

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <Header title='Create a new listing' showBack onBack={goBack}/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}