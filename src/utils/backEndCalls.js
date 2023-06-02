import { Alert } from 'react-native';

const showError = (message, error) => {
  console.error(message, error);
  Alert.alert(message);
};

const getProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();

    return data;
  } catch (error) {
    showError('An error occurred while getting all products !', error);
  }
};

const getCategories = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/categories');

    const data = await response.json();

    const dataWithId = data.map((value, index) => (
      {
        id: index + 1,
        title: `${value.charAt(0).toUpperCase()}${value.slice(1)}`,
        name: value
      }
    ));
    return dataWithId;

  } catch (error) {
    showError('An error occurred while getting all categories !', error);
  }
};

const getProductsOfCategory = async (category) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);

    const data = await response.json();

    return data;

  } catch (error) {
    showError(`An error occurred while getting all products of '${category}' category !`, error);
  }
};

export {
  getProducts,
  getCategories,
  getProductsOfCategory
};