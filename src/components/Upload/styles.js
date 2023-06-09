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
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  itemContainer: {
    width: 90,
    height: 90,
  },
  itemContainerAdd: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 8,
    borderColor: colors.textSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    width: 30,
    height: 30,
    backgroundColor: colors.smoke,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 90,
    height: 90,
    marginHorizontal: 10,
  },
  delImageIcon: {
    position: 'absolute',
    right: -16,
    top: -7
  }
});