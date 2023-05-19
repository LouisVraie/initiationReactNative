import React from 'react';
import { styles } from './styles';
import { Image, Text, View } from 'react-native';
import search from '../../assets/search.png';

export default function Header({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword }) {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.icon]}
        source={search}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
