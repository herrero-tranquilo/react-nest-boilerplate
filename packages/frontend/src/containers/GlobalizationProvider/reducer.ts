import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_LOCALE } from '../../translations';

export const initialState: { locale: Locale } = { locale: DEFAULT_LOCALE };

export const globalizationProviderStore = createSlice({
  name: 'globalization',
  initialState,
  reducers: {
    changeLocale: (state, action) => ({ ...state, locale: action.payload }),
  },
});
