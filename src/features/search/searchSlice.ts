import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleSearchChange: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { handleSearchChange } = searchSlice.actions;

export const searchValue = (state: RootState) => state.search.value;

export default searchSlice.reducer;
