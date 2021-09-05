import { StyleSheet } from 'react-native';

import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5
  },
  addToFavoritesButton: {
    height: 50,
    width: 200,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.darkGreen,
    borderWidth: 3,
    borderRadius: 15,
    marginVertical: 5
  },
  addToFavoritesText: {
    fontSize: 20,
    color: colors.darkGreen
  }
});

export default styles;
