import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row'
  },
  children: {
    color: colors.blue,
    marginLeft: 13,
    fontSize: 14,
  },
  checkboxContainer: {
    borderWidth: 1,
    borderColor: colors.blueGrey,
    width: 22,
    height: 22,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxContainerChecked: {
    backgroundColor: colors.blueGrey,
  },
  icon: {
    width: 12,
    height: 12,
  }
});