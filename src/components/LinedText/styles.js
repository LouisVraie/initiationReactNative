import { colors } from '../../utils/colors';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 38
  },
  text: {
    color: colors.blue,
    fontSize: 14
  },
  line: {
    width: 90,
    height: 1,
    borderColor: colors.smoke,
    backgroundColor: colors.smoke
  },
});