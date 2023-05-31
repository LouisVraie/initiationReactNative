import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  title: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  content: {
    color: colors.blue,
    fontSize: 14,
    marginTop: 5
  },
  icon: {
    color: colors.blue,
  }
});