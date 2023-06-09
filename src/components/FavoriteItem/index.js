import React, { useContext } from 'react';
import { styles } from './styles';
import { Image, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { UserContext } from '../../../App';
import defaultImage from '../../assets/default-image.png';
import formatPrice from '../../utils/formatPrice';

export default function FavoriteItem({ id, thumbnail, title, price }) {

  const { setFavorites } = useContext(UserContext);

  const navigation = useNavigation();

  const showProductPage = () => {
    navigation.navigate('Product', { productId: id });
  };

  const removeFavorite = () => {
    setFavorites(prev => prev.filter(data => data !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable onPress={showProductPage}>
          <Image style={styles.image} source={ thumbnail ? { uri: thumbnail } : defaultImage} />
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{formatPrice(price)}</Text>
        </View>
      </View>
      <Pressable style={styles.iconButton} onPress={removeFavorite}>
        <Icon
          name='close-circle-outline'
          style={styles.icon}
          size={20}
        />
      </Pressable>
    </View>
  );
}
