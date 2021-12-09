import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_URL } from '../../constants';
import { IToy } from '../../types/common';
import { AppThunk, RootState } from '../store';

interface CounterState {
  toys: Array<IToy>;
  isLoading: boolean;
}

const initialState: CounterState = {
  toys: [],
  isLoading: false,
};

export const toysSlice = createSlice({
  name: 'toys',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setToys: (state, action: PayloadAction<Array<IToy>>) => {
      state.toys = action.payload;
    },
  },
});

export const { setIsLoading, setToys } = toysSlice.actions;

export const fetchToysData = (): AppThunk => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    dispatch(setToys(data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
  dispatch(setIsLoading(false));
};

export const toysArrSlice = (state: RootState): Array<IToy> => state.toys.toys;
export const isLoadingSlice = (state: RootState): boolean => state.toys.isLoading;

export default toysSlice.reducer;
