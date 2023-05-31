import React, { useState } from 'react';
import { styles } from './styles';
import { Dimensions, FlatList, View } from 'react-native';
import { products } from '../../../data/products';
import { categories } from '../../../data/categories';
import ProductHomeItem from '../../../components/ProductHomeItem';
import CategoryHomeItem from '../../../components/CategoryHomeItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const { height } = Dimensions.get('window');

export default function Home() {

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