import { colors } from '../../../utils/colors';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 54
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.grey
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline'
  },
  image: {
    width: 357,
    height: 209,
    marginTop: 60
  },
  buttonContainer: {
    width: '80%',
  }
});