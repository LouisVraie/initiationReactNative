import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  title: {
    color: colors.blue,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Arial'
  },
  prefix: {
    color: colors.blue,
    fontSize: 14
  }
});