const getRandomFavorites = (myProducts, length) => {
  const randomFavorites = [];
  const productsCount = myProducts.length;

  while (randomFavorites.length < length) {
    const randomIndex = Math.floor(Math.random() * productsCount);
    const randomProduct = myProducts[randomIndex];

    if (!randomFavorites.includes(randomProduct.id)) {
      randomFavorites.push(randomProduct.id);
    }
  }

  return randomFavorites;
};

export default getRandomFavorites;