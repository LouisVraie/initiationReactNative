import React, { useContext, useEffect, useState } from 'react';
import { styles } from './styles';
import { Dimensions, FlatList, View } from 'react-native';
import ProductHomeItem from '../../../components/ProductHomeItem';
import CategoryHomeItem from '../../../components/CategoryHomeItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import { AppData } from '../../../../App';
import { getCategories, getProducts } from '../../../utils/backEndCalls';

const { height } = Dimensions.get('window');

export default function Home() {
  const { categories, setCategories, products, setProducts } = useContext(AppData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const renderCategoryItem = (item) => {
    const category = item.item;
    return (
      <CategoryHomeItem
        {...category}
        isSelected={category === selectedCategory}
        onPress={() => setSelectedCategory(category)}
      />
    );
  };

  const renderProductItem = (item) => {
    const product = item.item;
    return (
      <ProductHomeItem {...product} />
    );
  };

  useEffect(() => {
    const getPageData = async () => {
      const categoriesData = await getCategories();
      const productsData = await getProducts();
      setCategories(categoriesData);
      setProducts(productsData.products);
    };

    getPageData();
  }, []);

  useEffect(() => {
    if (categories !== []) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);
  return (
    <SafeAreaView>
      <Header showSearch title='Find All You Need'/>
      <View style={styles.container}>
        {/* Icon menu */}
        <FlatList
          data={categories}
          renderItem={(item => renderCategoryItem(item))}
          keyExtractor={item => String(item.id)}
          style={styles.categoryListContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal
        />

        {/* Products list */}
        <FlatList
          data={products}
          renderItem={(item => renderProductItem(item))}
          keyExtractor={item => String(item.id)}
          style={styles.productListContainer}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          ListFooterComponent={<View style={{ height: height / 1.5 }}/>}
        />
      </View>
    </SafeAreaView>
  );
}