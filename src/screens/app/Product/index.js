import React, { useContext, useEffect, useState } from 'react';
import { styles } from './styles';
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../utils/colors';
import defaultImage from '../../../assets/default-image.png';
import Button from '../../../components/Button';
import { AppData, UserContext } from '../../../../App';
import formatPrice from '../../../utils/formatPrice';

export default function Product({ route, navigation }) {
  const { favorites, setFavorites } = useContext(UserContext);
  const { products } = useContext(AppData);
  const { productId } = route.params;

  const [product, setProduct] = useState();
  const [isFavorite, setIsFavorite] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const toggleFavorite = () => {
    if (favorites.includes(productId)) {
      // Suppression
      setFavorites(prev => prev.filter(data => data !== productId));
      setIsFavorite(false);
    } else {
      // Ajout
      setFavorites(prev => [...prev, productId]);
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    setProduct(products.find(item => item.id === productId));
    setIsFavorite(favorites.includes(productId));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.productImage} source={ product?.thumbnail ? { uri: product.thumbnail } : defaultImage}></Image>
        <Pressable style={styles.backContainer} onPress={goBack}>
          <Icon
            name='chevron-back'
            color={colors.blue}
            size={24}
          />
        </Pressable>
        <View style={styles.divider}></View>
        <View style={styles.descriptionContainer}>
          <View style={styles.infosContainer}>
            <Text style={styles.productTitle}>{product?.title}</Text>
            <Text style={styles.productPrice}>{formatPrice(product?.price)}</Text>
            <Text style={styles.productDescription}>{product?.description}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.favoriteButton}
              onPress={toggleFavorite}
            >
              <Icon
                name={isFavorite ? 'bookmark' : 'bookmark-outline'}
                color={colors.blue}
                size={24}
              />
            </TouchableOpacity>
            <Button buttonStyle={styles.contactButton} titleStyle={{ fontSize: 20 }} title='Contact Seller'></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}