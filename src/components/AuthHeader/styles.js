import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 34,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actions: {
    width: '15%',
  },
  title: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  left: {
    alignSelf: 'flex-start'
  },
  right: {
    alignSelf: 'flex-end'
  },
  iconButton: {
  },
  icon: {
    color: colors.blue,
  },
  searchContainer: {
  },
  searchInnerContainer: {
    marginTop: 10,
    marginBottom: 0,
  },
  searchInput: {
    paddingVertical: 10,
  },
  hiddenSearchText: {
    textAlign: 'center',
    marginTop: 5,
  }
});