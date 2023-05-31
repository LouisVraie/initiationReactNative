import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginVertical: 10
  },
  imageContainer: {
    borderWidth: 10,
    borderRadius: 12,
    marginBottom: 5,
    borderColor: colors.veryLightGrey
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 12,
  },
  title: {
    fontSize: 14,
    color: colors.disabled,
  },
});