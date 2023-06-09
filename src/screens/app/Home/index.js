import React, { useContext, useEffect, useState } from 'react';
import { styles } from './styles';
import { Dimensions, FlatList, View } from 'react-native';
import ProductHomeItem from '../../../components/ProductHomeItem';
import CategoryHomeItem from '../../../components/CategoryHomeItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeader from '../../../components/AuthHeader';
import { AppData, UserContext } from '../../../../App';
import { getCategories, getProducts } from '../../../utils/backEndCalls';
import getRandomFavorites from '../../../utils/getRandomFavorites';

const { height } = Dimensions.get('window');

export default function Home() {
  const { setFavorites } = useContext(UserContext);
  const { categories, setCategories, products, setProducts } = useContext(AppData);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProducts, setSelectedProducts] = useState();
  const [searchText, setSearchText] = useState();

  const getProductOfSelectedCategory = (category) => {
    const myCategory = category || selectedCategory;
    setSelectedCategory(myCategory);

    let categorizedProducts = [];
    if (myCategory?.name !== 'popular') {
      categorizedProducts = products.filter(data => data.category === myCategory.name);
    } else {
      categorizedProducts = products;
    }

    if (searchText && searchText !== '') {
      categorizedProducts = categorizedProducts.filter(data => data.title.toLowerCase().includes(searchText.toLowerCase()) || data.description.toLowerCase().includes(searchText.toLowerCase()));
    }
    setSelectedProducts(categorizedProducts);
  };

  const renderCategoryItem = (item) => {
    const category = item.item;
    return (
      <CategoryHomeItem
        {...category}
        isSelected={category === selectedCategory}
        onPress={() => getProductOfSelectedCategory(category)}
      />
    );
  };

  const renderProductItem = (item) => {
    const product = item.item;
    return (
      <ProductHomeItem {...product} />
    );
  };

  const getNewFavorites = (myProducts) => {
    const randomFavorites = getRandomFavorites(myProducts, 3);
    setFavorites(randomFavorites);
  };

  useEffect(() => {
    const getPageData = async () => {
      const categoriesData = await getCategories();
      const productsData = await getProducts();
      setCategories(categoriesData);
      setProducts(productsData.products);
      getNewFavorites(productsData.products);
    };

    getPageData();
  }, []);

  useEffect(() => {
    if (categories !== []) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  useEffect(() => {
    if (products) {
      getProductOfSelectedCategory();
    }
  }, [products]);

  useEffect(() => {
    if (searchText) {
      getProductOfSelectedCategory();
    }
  }, [searchText]);

  return (
    <SafeAreaView>
      <AuthHeader
        title='Find All You Need'
        showSearch
        keyword={searchText}
        setKeyword={setSearchText}
      />
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
          data={selectedProducts}
          renderItem={(item => renderProductItem(item))}
          keyExtractor={item => String(item.id)}
          style={styles.productListContainer}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          ListFooterComponent={<View style={{ height: height }}/>}
        />
      </View>
    </SafeAreaView>
  );
}