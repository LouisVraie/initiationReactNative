import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 10
  },
  image: {
    width: (width / 2) - 30,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    color: colors.lightGreyTitle,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});