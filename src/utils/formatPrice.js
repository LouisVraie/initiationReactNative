const formatPrice = (price) => {
  return `$ ${Number.parseFloat(price).toFixed(2)}`;
};

export default formatPrice;