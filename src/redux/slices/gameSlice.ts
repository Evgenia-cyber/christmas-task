import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_COUNT_OF_SELECTED_TOYS } from '../../constants';
import fetchAllToysData from '../../services/api';
import { IGameSettings, IToy, IGameToy } from '../../types/common';
import { initGameSettings, initSelectedToysNums } from '../initState';
import { AppThunk, RootState } from '../store';

interface IToysState {
  toys: Array<IGameToy>;
  isLoading: boolean;
  gameSettings: IGameSettings;
}

const initialState: IToysState = {
  toys: [],
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
    setGameToys: (state, action: PayloadAction<Array<IToy>>) => {
      let toys = action.payload;

      if (initSelectedToysNums.length) {
        toys = toys.filter((toy) => initSelectedToysNums.includes(toy.num));
      } else {
        toys = toys.filter((toy) => Number(toy.num) <= DEFAULT_COUNT_OF_SELECTED_TOYS);
      }

      state.toys = toys.map((toy) => ({
        num: toy.num,
        countOfToysOnSlot: Number(toy.count),
        countOfToysOnTree: 0,
      }));
    },
  },
});

export const { setIsLoading, setGameSettings, setGameToys } = gameSlice.actions;

export const fetchGameToysData = (): AppThunk => async (dispatch) => {
  dispatch(setIsLoading(true));
  const data = await fetchAllToysData();
  dispatch(setGameToys(data));
  dispatch(setIsLoading(false));
};

export const isLoadingSlice = (state: RootState): boolean => state.game.isLoading;
export const gameSettingsSlice = (state: RootState): IGameSettings => state.game.gameSettings;
export const gameToysSlice = (state: RootState): Array<IGameToy> => state.game.toys;

export default gameSlice.reducer;
