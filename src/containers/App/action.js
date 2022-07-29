import {
    POKEMON_DATA, POKEMON_DATA_FAILURE, POKEMON_DATA_SUCCESS, PAGE
  } from './constants';
  
 
  
  export function loadingPokeMonFailure(error) {
    return {
      type: POKEMON_DATA_FAILURE,
      error,
    };
  }
  
  export function loadingPokeMon() {
    return {
      type: POKEMON_DATA,
    };
  }

  export function loadingPokeMonSuccess(pokemons) {
    return {
      type: POKEMON_DATA_SUCCESS,
      pokemons,
    };
  }
  export function togglePage(page) {
    return {
      type: PAGE,
        page,
    };
  }