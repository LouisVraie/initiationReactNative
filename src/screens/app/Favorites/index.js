import React, { useContext, useEffect, useState } from 'react';
import { styles } from './styles';
import { Dimensions, FlatList, SafeAreaView, Text, View } from 'react-native';
import FavoriteItem from '../../../components/FavoriteItem';
import { AppData, UserContext } from '../../../../App';
import AuthHeader from '../../../components/AuthHeader';

const { height } = Dimensions.get('window');

export default function Favorites() {
  const { favorites } = useContext(UserContext);
  const { products } = useContext(AppData);

  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const renderFavoritesItem = (item) => {
    const product = item.item;

    return (
      <>
        <FavoriteItem {...product} />
      </>
    );
  };

  useEffect(() => {
    if (products) {
      setFavoriteProducts(products.filter(data => favorites.includes(data.id)));
    }
  }, [favorites]);

  return (
    <SafeAreaView>
      <AuthHeader title='Favorites'/>
      <View style={styles.container}>
        {
          favoriteProducts.length !== 0 ?
            <FlatList
              data={favoriteProducts}
              renderItem={(item => renderFavoritesItem(item))}
              keyExtractor={item => String(item.id)}
              style={styles.categoryListContainer}
              showsHorizontalScrollIndicator={false}
              ListFooterComponent={<View style={{ height: height / 2 }}/>}
            />
            :
            <Text style={styles.text}>No favorites yet.</Text>
        }
      </View>
    </SafeAreaView>
  );
}