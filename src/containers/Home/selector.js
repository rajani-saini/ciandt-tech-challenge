/* eslint-disable import/no-unresolved */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPage = state => state.account || initialState;
const makeSelectAccountData = () =>
  createSelector(selectPage, substate => substate);

export { selectPage, makeSelectAccountData };
