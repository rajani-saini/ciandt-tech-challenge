import { POKEMON_DATA, POKEMON_DATA_FAILURE, POKEMON_DATA_SUCCESS } from '../constants/actionTypes';

const INITIAL_STATE = {
  pokemons: [],
  isLoading: true,
  error: '',
};

const pokemonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POKEMON_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case POKEMON_DATA_SUCCESS:
      return {
        ...state,
        pokemons: action.pokemon,
        isLoading: false,
      };
    case POKEMON_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      }
    default:
      return state;
  }
}

export default pokemonReducer;