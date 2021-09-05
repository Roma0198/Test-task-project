import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds, setCateId, setFavoriteBreeds } from '../../redux/app/action';

import Header from '../../components/Header';
import AddToFavoritesButton from '../../components/AddToFavoritesButton';

import images from '../../themes/images';

import styles from './styles';

const HomeScreen = ( props ) => {
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(false);

  const favoriteBreeds = useSelector((state) => state.appReducer.favoriteBreeds);
  const catsBreeds = useSelector((state) => state.appReducer.catsBreeds);

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

  const handleAddToFavoriteBreed = (breed) => {
    if (favoriteBreeds.find(item =>
      item.id.toString() === breed.id.toString())
    ) {
      Alert.alert(
        'Warning!',
        'This breed has already been added to your favorite list!',
        [
          { text: 'OK' }
        ]
      );
    } else {
      dispatch(setFavoriteBreeds(breed));
    }
  };

  const renderBreedItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => handleBreedSelect(item.id) } activeOpacity={0.5} style={styles.breedCard}>
          <Text style={styles.breedName}> Breed: {item.name} </Text>
          <Image style={styles.breedImage} source={(item.image && item.image.url) ? {uri: item.image.url} : images.catUnlocked}/>
          <AddToFavoritesButton useAddButton={() => handleAddToFavoriteBreed(item)} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        renderItem={renderBreedItem}
        data={catsBreeds}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={onRefresh}
        refreshing={isFetching}
      />
    </View>
  );
};

export default HomeScreen;