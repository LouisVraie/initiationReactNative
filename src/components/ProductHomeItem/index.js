import React from 'react';
import { styles } from './styles';
import { Image, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import defaultImage from '../../assets/default-image.png';
import formatPrice from '../../utils/formatPrice';

export default function ProductHomeItem({ id, thumbnail, title, price }) {

  const navigation = useNavigation();

  const showProductPage = () => {
    navigation.navigate('Product', { productId: id });
  };

  return (
    <Pressable style={styles.container} onPress={showProductPage}>
      <Image style={styles.image} source={ thumbnail ? { uri: thumbnail } : defaultImage} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{formatPrice(price)}</Text>
    </Pressable>
  );
}
