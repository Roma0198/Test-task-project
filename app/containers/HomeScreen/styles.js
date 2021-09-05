import { StyleSheet } from 'react-native';

import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  breedCard: {
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: colors.gold,
    paddingBottom: 10,
    alignItems: 'center'
  },
  breedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  breedName: {
    fontSize: 20,
    color: colors.gold
  }
});

export default styles;
