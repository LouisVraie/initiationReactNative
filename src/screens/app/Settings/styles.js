import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  title: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: colors.textSecondary,
  },
  actionCard: {
    marginVertical: 13
  }
});