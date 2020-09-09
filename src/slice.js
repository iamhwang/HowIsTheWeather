import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchWord: 'Hello, World?',
  searchResults: '',
};

const reducers = {
  changneSearchWord(state, { payload: searchWord }) {
    return {
      ...state,
      searchWord: 'dispatch works',
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  changneSearchWord,
} = actions;

export function searchData(searchWord) {
  return async (dispatch) => {
    const { data } = await crawlingData();
  };
}

export default reducer;
