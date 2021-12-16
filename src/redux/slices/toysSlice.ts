import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_COLORS, ALL_SHAPES, ALL_SIZES, DATA_URL, SELECTED_TOYS_MAX_COUNT } from '../../constants';
import { ISettings, IToy } from '../../types/common';
import getFiltersArrFromObj from '../../utils/getFiltersArrFromObj';
import setIsSelectedForSelectedToys from '../../utils/setIsSelectedForSelectedToys';
import { initSelectedToysNums, initSettings } from '../initState';
import { AppThunk, RootState } from '../store';

interface CounterState {
  toys: Array<IToy>;
  isLoading: boolean;
  selectedToysNums: Array<string>;
  isShowPopup: boolean;
  settings: ISettings;
}

const initialState: CounterState = {
  toys: [],
  isLoading: false,
  selectedToysNums: initSelectedToysNums,
  isShowPopup: false,
  settings: initSettings,
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
      let toys = action.payload;

      // filter toys according to settings
      const { quantityFilter, yearFilter, colorFilter, sizeFilter, shapeFilter } = state.settings;
      const colors = getFiltersArrFromObj(colorFilter, ALL_COLORS);
      const sizes = getFiltersArrFromObj(sizeFilter, ALL_SIZES);
      const shapes = getFiltersArrFromObj(shapeFilter, ALL_SHAPES);

      toys = toys.filter(
        (toy) =>
          Number(toy.count) >= quantityFilter[0] &&
          Number(toy.count) <= quantityFilter[1] &&
          Number(toy.year) >= yearFilter[0] &&
          Number(toy.year) <= yearFilter[1] &&
          colors.includes(toy.color) &&
          sizes.includes(toy.size) &&
          shapes.includes(toy.shape),
      );

      // indicate selected toys
      const { selectedToysNums } = state;
      if (selectedToysNums.length > 0) {
        toys = setIsSelectedForSelectedToys(toys, selectedToysNums);
      }
      state.toys = toys;
    },
    setSettings: (state, action: PayloadAction<ISettings>) => {
      const newSettings = action.payload;
      state.settings = newSettings;
      localStorage.setItem('settings', JSON.stringify(newSettings));
    },
    toogleIsSelectedOfToy: (state, action: PayloadAction<string>) => {
      const selectedToyNum = action.payload;
      const { toys, selectedToysNums } = state;
      const selectedToysCount = selectedToysNums.length;

      const index = selectedToysNums.indexOf(selectedToyNum);
      if (index !== -1) {
        selectedToysNums.splice(index, 1);
      } else if (selectedToysCount < SELECTED_TOYS_MAX_COUNT) {
        selectedToysNums.push(selectedToyNum);
      } else {
        state.isShowPopup = true;
        return;
      }

      state.selectedToysNums = selectedToysNums;
      state.toys = toys.map((toy) => {
        if (toy.num === selectedToyNum) {
          toy.isSelected = !toy.isSelected;
        }
        return toy;
      });

      localStorage.setItem('toysNums', JSON.stringify(selectedToysNums));
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
export const selectedToysCountSlice = (state: RootState): number => state.toys.selectedToysNums.length;
export const isShowPopupSlice = (state: RootState): boolean => state.toys.isShowPopup;
export const settingsSlice = (state: RootState): ISettings => state.toys.settings;

export default toysSlice.reducer;
