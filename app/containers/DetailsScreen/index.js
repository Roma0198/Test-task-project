import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, Alert } from 'react-native';
import Star from 'react-native-star-view';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import AddToFavoritesButton from '../../components/AddToFavoritesButton';

import { setFavoriteBreeds } from '../../redux/app/action';

import styles from './styles';
import images from '../../themes/images';

const DetailsScreen = () => {
  const [selectedCat, setSelectedCat] = useState('');

  const catsBreeds = useSelector((state) => state.appReducer.catsBreeds);
  const breedId = useSelector((state) => state.appReducer.breedId);
  const favoriteBreeds = useSelector((state) => state.appReducer.favoriteBreeds);

  const dispatch = useDispatch();

  useEffect(() => {
    getSelectedCat();
  }, []);

  const getSelectedCat = () => {
    catsBreeds.forEach((item) => {
      if (breedId.toString() === item.id) {
        setSelectedCat(item);
      }
    });
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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.catMainBox}>
        <ScrollView contentContainerStyle={styles.catScroll}>
          <Text style={styles.nameCatText}>{selectedCat.name}</Text>
          <Image style={styles.catImage} source={selectedCat.image && selectedCat.image.url ? { uri: selectedCat.image.url } : images.catUnlocked}/>
          <View style={styles.characteristicsBox}>
            <Text style={styles.characteristicsText}>Affection Level</Text>
            <Star score={Number(selectedCat.affection_level)} />
            <Text style={styles.characteristicsText}>Child Friendly</Text>
            <Star score={Number(selectedCat.child_friendly)} />
            <Text style={styles.characteristicsText}>Intelligence</Text>
            <Star score={Number(selectedCat.intelligence)} />
            <Text style={styles.characteristicsText}>Shedding Level</Text>
            <Star score={Number(selectedCat.shedding_level)} />
            <Text style={styles.characteristicsText}>Vocalisation</Text>
            <Star score={Number(selectedCat.vocalisation)} />
            <AddToFavoritesButton useAddButton={() => handleAddToFavoriteBreed(selectedCat)} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsScreen;