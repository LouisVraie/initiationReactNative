import React from 'react';
import { styles } from './styles';
import { Image, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductHomeItem({ id, image, title, price }) {

  const navigation = useNavigation();

  const showProductPage = () => {
    navigation.navigate('Product', { productId: id });
  };

  return (
    <Pressable style={styles.container} onPress={showProductPage}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
}
