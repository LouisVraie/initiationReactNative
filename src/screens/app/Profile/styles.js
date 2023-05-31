import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  userDataContainer: {
    marginBottom: 13,
  },
  userName: {
    color: colors.grey,
    fontSize: 20,
    fontWeight: 'bold'
  },
  userEmail: {
    fontSize: 14,
    color: colors.textSecondary
  },
  actionCard: {
    marginVertical: 13
  },
  button: {
    marginTop: 13,
    marginBottom: 36,
  },
});