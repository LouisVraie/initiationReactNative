import React from 'react';
import { styles } from './styles';
import { ScrollView, Text, View } from 'react-native';

export default function Favorites() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Favorites</Text>
      </View>
    </ScrollView>
  );
}