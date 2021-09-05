import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavoriteBreeds, getBreeds, setCateId } from '../../redux/app/action';

import Header from '../../components/Header';

import images from '../../themes/images';
import styles from './styles.js';

const FavoritesScreen = ( props ) => {
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(false);

  const favoriteBreeds = useSelector((state) => state.appReducer.favoriteBreeds);

  useEffect(() => {
    dispatch(getBreeds());
  }, []);

  const fetchData = () => {
    dispatch(getBreeds());
    setIsFetching(false);
  };

  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  };

  const handleBreedSelect = (id) => {
    dispatch(setCateId(id));
    props.navigation.navigate('DetailsScreen');
  };

  const handleClearFavoriteBreeds = () => {
    dispatch(clearFavoriteBreeds());
  };

  const renderBreedItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => handleBreedSelect(item.id) } activeOpacity={0.5} style={styles.breedCard}>
          <Text style={styles.breedName}> Breed: {item.name} </Text>
          <Image style={styles.breedImage} source={(item.image && item.image.url) ? {uri: item.image.url} : images.catUnlocked}/>
        </TouchableOpacity>
      </View>
    );
  };

  const renderListFooterComponent = () => {
    return (
      <View style={styles.listFooterComponent}>
        <TouchableOpacity onPress={handleClearFavoriteBreeds} style={styles.clearFavoritesButton}>
          <Text style={styles.clearFavoritesText}> Clear favorite list</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      {favoriteBreeds.length > 0
        ?
        <FlatList
          renderItem={renderBreedItem}
          data={favoriteBreeds}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={onRefresh}
          refreshing={isFetching}
          ListFooterComponent={renderListFooterComponent}
        />
        :
        <Text style={styles.emptyFavoritesText}> Favorite list is empty! </Text>
      }
    </View>
  );
};

export default FavoritesScreen;