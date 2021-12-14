import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_URL, SELECTED_TOYS_MAX_COUNT } from '../../constants';
import { ISettings, IToy } from '../../types/common';
import getSelectedToysCount from '../../utils/getSelectedToysCount';
import { initSelectedToysCount, initSettings, initToys } from '../initState';
import { AppThunk, RootState } from '../store';

interface CounterState {
  toys: Array<IToy>;
  isLoading: boolean;
  selectedToysCount: number;
  isShowPopup: boolean;
  settings: ISettings;
}

const initialState: CounterState = {
  toys: initToys,
  isLoading: false,
  selectedToysCount: initSelectedToysCount,
  isShowPopup: false,
  settings: { quantityFilter: initSettings.quantity },
};

export const toysSlice = createSlice({
  name: 'toys',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsShowPopup: (state, action: PayloadAction<boolean>) => {
      state.isShowPopup = action.payload;
    },
    setToys: (state, action: PayloadAction<Array<IToy>>) => {
      state.toys = action.payload;
    },
    setSettings: (state, action: PayloadAction<ISettings>) => {
      const newSettings = action.payload;
      state.settings = newSettings;
      localStorage.setItem('settings', JSON.stringify(newSettings));
    },
    toogleIsSelectedOfToy: (state, action: PayloadAction<string>) => {
      const selectedToyNum = Number(action.payload);
      const { toys } = state;
      toys[selectedToyNum - 1].isSelected = !toys[selectedToyNum - 1].isSelected;
      const selectedToysCount = getSelectedToysCount(toys);

      if (selectedToysCount > SELECTED_TOYS_MAX_COUNT) {
        toys[selectedToyNum - 1].isSelected = false;
        state.isShowPopup = true;
      } else {
        state.toys = toys;
        state.selectedToysCount = selectedToysCount;
        localStorage.setItem('toys', JSON.stringify(toys));
      }
    },
  },
});

export const { setIsLoading, setIsShowPopup, setToys, toogleIsSelectedOfToy, setSettings } = toysSlice.actions;

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
export const selectedToysCountSlice = (state: RootState): number => state.toys.selectedToysCount;
export const isShowPopupSlice = (state: RootState): boolean => state.toys.isShowPopup;
export const settingsSlice = (state: RootState): ISettings => state.toys.settings;

export default toysSlice.reducer;
