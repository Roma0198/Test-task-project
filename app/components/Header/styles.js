import { StyleSheet } from 'react-native';

import colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  projectNameText: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold'
  }
});

export default styles;
