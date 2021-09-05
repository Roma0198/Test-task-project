import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.projectNameText}> About Cats 🐱 </Text>
      </View>
    </View>
  );
};

export default Header;