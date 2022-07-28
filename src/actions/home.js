import {
    POKEMON_DATA, POKEMON_DATA_FAILURE, POKEMON_DATA_SUCCESS
  } from '../constants/actionTypes';
  
  export function loadingPokeMonSuccess(pokemon) {
    return {
      type: POKEMON_DATA,
      pokemon,
    };
  }
  
  export function loadingPokeMonFailure(error) {
    return {
      type: POKEMON_DATA_FAILURE,
      error,
    };
  }
  
  export function loadingPokeMon() {
    return {
      type: POKEMON_DATA_SUCCESS,
    };
  }
