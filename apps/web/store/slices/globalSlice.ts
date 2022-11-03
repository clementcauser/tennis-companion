import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GlobalState = {
  language: 'fr' | 'en';
};

const initialState: GlobalState = {
  language: 'fr',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLanguage(state, { payload }: PayloadAction<GlobalState['language']>) {
      state.language = payload;
    },
  },
});

export const { setLanguage } = globalSlice.actions;
export default globalSlice.reducer;
