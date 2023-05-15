import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    width: '100%'
  },
  label: {
    color: colors.blue,
    marginBottom: 9,
    fontSize: 14
  },
  inputContainer: {
    borderRadius: 14,
    borderColor: colors.blueGrey,
    borderWidth: 1,
  },
  input: {
    paddingHorizontal: 17,
    paddingVertical: 21,
    fontSize: 14,
  }
});