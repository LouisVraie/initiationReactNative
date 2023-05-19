import React, { useEffect, useState } from 'react';
import { styles } from './styles';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { products } from '../../../data/products';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../utils/colors';

export default function Product({ route, navigation }) {

  const { productId } = route.params;
  const [product, setProduct] = useState();

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setProduct(products.find(item => item.id === productId));
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Pressable onPress={goBack}>
            <Icon
              name='chevron-back'
              color={colors.blue}
              size={24}
            />
          </Pressable>
        </View>
        <Text>Product</Text>
      </View>
    </ScrollView>
  );
}