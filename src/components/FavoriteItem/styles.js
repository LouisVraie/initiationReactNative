import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    marginHorizontal: 20,
    borderBottomColor: colors.smoke,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  innerContainer: {
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 14,
    color: colors.lightGreyText,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey
  },
  icon: {
    color: colors.blue
  }
});