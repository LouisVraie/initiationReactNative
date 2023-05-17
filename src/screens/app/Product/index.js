import React from 'react';
import { styles } from './styles';
import { ScrollView, Text, View } from 'react-native';

export default function Product() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Product</Text>
      </View>
    </ScrollView>
  );
}