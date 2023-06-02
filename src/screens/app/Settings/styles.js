import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  innerContainer: {
    marginBottom: 50,
  },
  titleContainer: {
    marginBottom: 15,
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
    width: 24,
    height: 24,
  },
  infoCard: {
    marginBottom: 15,
  },
  actionCard: {
    marginBottom: 10,
  },
  actionCardTitle: {
    fontSize: 16
  }
});