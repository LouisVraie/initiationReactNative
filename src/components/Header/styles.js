import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 34,
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  title: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconButton: {
  },
  icon: {
    color: colors.blue
  },
});