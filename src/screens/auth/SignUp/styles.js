import { colors } from '../../../utils/colors';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 36
  },
  text: {
    color: colors.blue,
    fontSize: 14
  },
  checkboxTextBold: {
    fontWeight: 'bold'
  },
  linkContainer: {
    flexDirection: 'row',
  }
});