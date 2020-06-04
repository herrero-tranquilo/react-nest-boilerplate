import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './reducer';
import { RootStateType } from '../../configureStore';

export const selectGlobalization = (
  state: RootStateType,
): typeof initialState => state.globalization || initialState;

export const makeSelectLocale = () =>
  createSelector(selectGlobalization, globalization => globalization.locale);
