import React from 'react';
import { styles } from './styles';
import { Image, ScrollView, Text, View } from 'react-native';
import search from '../../../assets/search.png';

export default function Home() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            style={[styles.icon]}
            source={search}
          />
          <Text style={styles.title}>Find All you Need</Text>
        </View>
        {/* Top title and search */}
        {/* Icon menu */}
        {/* Products list */}
        {/* BottomNavigation */}
      </View>
    </ScrollView>
  );
}