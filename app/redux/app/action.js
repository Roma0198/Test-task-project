import {
  SET_BREEDS_DATA,
  SET_BREED_ID,
  SET_FAVORITE_BREEDS,
  CLEAR_FAVORITE_BREEDS_STATE
} from '../actionTypes';
import axios from 'axios';

export const getBreeds = () => (dispatch) =>
  axios.get('https://api.thecatapi.com/v1/breeds').then((res) => {
    dispatch(setBreeds(res.data));
  });

export function setBreeds(data) {
  return { type: SET_BREEDS_DATA, payload: data };
}

export function setCateId(data) {
  return { type: SET_BREED_ID, payload: data };
}

export function setFavoriteBreeds(data) {
  return {type: SET_FAVORITE_BREEDS, payload: data};
}

export function clearFavoriteBreeds(data) {
  return {type: CLEAR_FAVORITE_BREEDS_STATE, payload: data};
}

