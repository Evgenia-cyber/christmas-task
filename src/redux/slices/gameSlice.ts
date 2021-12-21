import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchAllToysData from '../../services/api';
import { IGameSettings, IToy } from '../../types/common';
import { initGameSettings } from '../initState';
import { AppThunk, RootState } from '../store';

interface IToysState {
  toys: Array<IToy>;
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
  },
});

export const { setIsLoading, setGameSettings } = gameSlice.actions;

// export const fetchToysData = (): AppThunk => async (dispatch) => {
//   dispatch(setIsLoading(true));
//   const data = await fetchAllToysData();
//   dispatch(setToys(data));
//   dispatch(setIsLoading(false));
// };

export const isLoadingSlice = (state: RootState): boolean => state.game.isLoading;
export const gameSettingsSlice = (state: RootState): IGameSettings => state.game.gameSettings;

export default gameSlice.reducer;
