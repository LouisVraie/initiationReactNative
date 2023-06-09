import React from 'react';
import { styles } from './styles';
import { ScrollView, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';

export default function CreateListing({ navigation }) {

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <AuthHeader title='Create a new listing' showBack onBack={goBack}/>
      <View style={styles.container}>
      </View>
    </ScrollView>
  );
}