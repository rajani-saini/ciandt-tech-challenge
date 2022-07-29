/* eslint-disable import/no-unresolved */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPage = state => state.app || initialState;
const makeSelectAppData = () =>
  createSelector(selectPage, substate => substate);

export { selectPage, makeSelectAppData };
