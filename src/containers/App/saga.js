import { put, takeEvery, all, call, takeLatest, select } from 'redux-saga/effects'
import { PAGE, API_URL } from './constants';
import { makeSelectAppData } from './selector';
import { loadingPokeMon, loadingPokeMonSuccess, loadingPokeMonFailure } from './action';
import axios from 'axios';
axios.defaults.baseURL = API_URL;

export const fetchallPokemon = (page) => {
  return axios.get(`/?limit=30&offset=${page}`);
};

function* getAllPokemon({page}) {
   
    yield put(loadingPokeMon());
    try {
      const result = yield call(fetchallPokemon, page);
      yield put(loadingPokeMonSuccess(result.data));
    } catch (e) {
      yield put(loadingPokeMonFailure(e));
    }
  }
function* mainsaga() {
  const data = yield select(makeSelectAppData());
  yield call(getAllPokemon, data);
  yield takeLatest(PAGE, getAllPokemon);
}

export default mainsaga;

