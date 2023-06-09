import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%'
  },
  label: {
    color: colors.blue,
    marginBottom: 9,
    fontSize: 14,
    fontWeight: 'bold'
  },
  inputContainer: {
    borderRadius: 14,
    borderColor: colors.blueGrey,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputTextAlign: {
    textAlignVertical: 'top'
  },
  input: {
    paddingHorizontal: 17,
    paddingVertical: 21,
    fontSize: 14,
    flex: 1,
    opacity: 0.4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 17,
  }
});