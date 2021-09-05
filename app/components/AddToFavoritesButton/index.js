import React from 'react';
import { View,  Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const AddToFavoritesButton = (props) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.useAddButton} style={styles.addToFavoritesButton}>
        <Text style={styles.addToFavoritesText}>Add to favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = store => ({
  appReducer: store.appReducer,
});

export default connect (mapStateToProps)(AddToFavoritesButton);