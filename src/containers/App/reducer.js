/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import produce from 'immer';
import {
  PAGE,
  POKEMON_DATA, 
  POKEMON_DATA_SUCCESS,
  POKEMON_DATA_FAILURE
} from './constants';
export const initialState = {
  page: 1,
  pokemons: false,
  loading: false,
  error: false,
};
const mainReducer = produce((draft, action) => {
  switch (action.type) {
    case PAGE:
      draft.page = ((action.page - 1) * 30);
      break;
    case POKEMON_DATA:
      draft.pokemons = false;
      draft.loading = true;
      draft.error = false;
      break;
    case POKEMON_DATA_SUCCESS:
        draft.pokemons = action.pokemons;
        draft.loading = false;
        draft.error = false;
      break;
    case POKEMON_DATA_FAILURE:
        draft.pokemons = false;
        draft.loading = false;
        draft.error = action.error;
      break;
  }
}, initialState);

export default mainReducer;
