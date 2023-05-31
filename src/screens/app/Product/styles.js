import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  backContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
    position: 'absolute',
    left: 20,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  productImage: {
    width: '100%',
    height: height / 1.6,
  },
  divider: {
    height: 36,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: colors.white,
    marginTop: -36
  },
  descriptionContainer: {
    marginHorizontal: 25,
    marginBottom: 30,
  },
  infosContainer: {
    marginBottom: 20
  },
  productTitle: {
    color: colors.grey,
    fontSize: 24,
    marginBottom: 10,
  },
  productPrice: {
    color: colors.grey,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productDescription: {
    color: colors.lightGreyText,
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  favoriteButton: {
    width: 60,
    height: 60,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.veryLightGreyButton
  },
  contactButton: {
    width: width - 50 - 60 - 15,
    height: 60,
    paddingVertical: 16,
    fontWeight: 'normal'
  },
});