import { StyleSheet } from 'react-native';

import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  breedCard: {
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: colors.gold,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  breedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  breedName: {
    fontSize: 21,
    color: colors.gold
  },
  listFooterComponent:{
    alignItems: 'center'
  },
  clearFavoritesButton: {
    height: 50,
    width: 200,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.darkRed,
    borderWidth: 3,
    borderRadius: 15,
    marginVertical: 5
  },
  clearFavoritesText: {
    fontSize: 20,
    color: colors.darkRed
  },
  emptyFavoritesText: {
    top: '30%',
    fontSize: 20,
    color: colors.darkRed,
    textAlign: 'center'
  }
});

export default styles;
