import {
  SET_BREEDS_DATA,
  SET_BREED_ID,
  SET_FAVORITE_BREEDS,
  CLEAR_FAVORITE_BREEDS_STATE
} from '../actionTypes';

const initialState = {
  catsBreeds: [],
  breedId: 'Hello',
  favoriteBreeds: []
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_BREEDS_DATA: {
      return {
        ...state,
        catsBreeds: action.payload,
      };
    }
    case SET_BREED_ID: {
      return {
        ...state,
        breedId: action.payload,
      };
    }
    case SET_FAVORITE_BREEDS: {
      return {
        ...state,
        favoriteBreeds: [...state.favoriteBreeds, action.payload],
      };
    }
    case CLEAR_FAVORITE_BREEDS_STATE: {
      return {
        ...state,
        favoriteBreeds: [],
      };
    }
    default: return state;
  }
};

export default app;
