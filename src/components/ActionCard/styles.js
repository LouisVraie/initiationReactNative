import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
  },
  touchable: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 5
  },
  icon: {
    color: colors.blue,
  }
});