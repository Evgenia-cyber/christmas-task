import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_COUNT_OF_SELECTED_TOYS } from '../../constants';
import fetchAllToysData from '../../services/api';
import { IGameSettings, IGameToyCategory, IGameTreeToy, IToy } from '../../types/common';
import { initGameSettings } from '../initState';
import { AppThunk, RootState } from '../store';

interface IToysState {
  toysOnSlots: Array<IGameToyCategory>;
  toysOnTree: Array<IGameTreeToy>;
  isLoading: boolean;
  gameSettings: IGameSettings;
}

const initialState: IToysState = {
  toysOnSlots: [],
  toysOnTree: [],
  isLoading: false,
  gameSettings: initGameSettings,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setGameSettings: (state, action: PayloadAction<IGameSettings>) => {
      const newSettings = action.payload;
      state.gameSettings = newSettings;
      localStorage.setItem('gameSettings', JSON.stringify(newSettings));
    },
    setGameToys: (state, action: PayloadAction<{ data: Array<IToy>; selectedToysFromToysPage: Array<string> }>) => {
      let toys = action.payload.data;
      const selectedToysNums = action.payload.selectedToysFromToysPage;

      if (selectedToysNums.length) {
        toys = toys.filter((toy) => selectedToysNums.includes(toy.num));
      } else {
        toys = toys.filter((toy) => Number(toy.num) <= DEFAULT_COUNT_OF_SELECTED_TOYS);
      }

      let toysOnSlots: Array<IGameToyCategory> = toys.map((toy) => ({
        toysOnSlot: new Array(Number(toy.count)).fill('0').map((_item, index) => ({
          id: `${toy.num}-${index}`,
          num: toy.num,
        })),
      }));

      const toysCount = toysOnSlots.length;
      if (toysCount < DEFAULT_COUNT_OF_SELECTED_TOYS) {
        toysOnSlots = [
          ...toysOnSlots,
          ...new Array(DEFAULT_COUNT_OF_SELECTED_TOYS - toysCount).fill({ toysOnSlot: [] }),
        ];
      }

      state.toysOnSlots = toysOnSlots;
    },
  },
});

export const { setIsLoading, setGameSettings, setGameToys } = gameSlice.actions;

export const fetchGameToysData =
  (selectedToysFromToysPage: Array<string>): AppThunk =>
  async (dispatch) => {
    dispatch(setIsLoading(true));
    const data = await fetchAllToysData();
    dispatch(setGameToys({ data, selectedToysFromToysPage }));
    dispatch(setIsLoading(false));
  };

export const isLoadingSlice = (state: RootState): boolean => state.game.isLoading;
export const gameSettingsSlice = (state: RootState): IGameSettings => state.game.gameSettings;
export const gameToysOnSlotsSlice = (state: RootState): Array<IGameToyCategory> => state.game.toysOnSlots;
export const gameToysOnTreeSlice = (state: RootState): Array<IGameTreeToy> => state.game.toysOnTree;

export default gameSlice.reducer;
