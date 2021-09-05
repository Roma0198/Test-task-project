import { StyleSheet } from 'react-native';

import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  catMainBox: {
    width: '100%',
    height: '100%'
  },
  catScroll: {
    paddingBottom: 75
  },
  nameCatText: {
    fontSize: 24,
    color: colors.whiteOrange2,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  catImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 200,
    marginVertical: 10
  },
  characteristicsBox: {
    width: '100%',
    alignItems: 'center',
  },
  characteristicsText: {
    fontSize: 16,
    color: colors.gold
  }
});

export default styles;
