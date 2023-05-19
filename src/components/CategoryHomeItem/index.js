import React from 'react';
import { styles } from './styles';
import { Image, Pressable, Text, View } from 'react-native';
import { colors } from '../../utils/colors';

export default function CategoryHomeItem({ image, title, isSelected, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.imageContainer, isSelected ? { borderColor: colors.grey } : null]}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
