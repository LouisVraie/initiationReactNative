import React from 'react';
import { styles } from './styles';
import { ScrollView, Text, View } from 'react-native';

export default function Profile() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </ScrollView>
  );
}