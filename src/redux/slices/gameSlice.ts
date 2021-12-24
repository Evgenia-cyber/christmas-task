import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SELECTED_TOYS_MAX_COUNT } from '../../constants';
import fetchAllToysData from '../../services/api';
import { IGameSettings, IGameSlotToy, IGameToyCategory, IGameTreeToy, IToy } from '../../types/common';
import { initGameSettings } from '../initState';
import { AppThunk, RootState } from '../store';

interface IToysState {
  toysOnSlotsObj: IGameToyCategory;
  toysOnTree: Array<IGameTreeToy>;
  isToyAboveTreeNow: boolean;
  isLoading: boolean;
  gameSettings: IGameSettings;
}

const initialState: IToysState = {
  toysOnSlotsObj: {},
  toysOnTree: [],
  isToyAboveTreeNow: false,
  isLoading: false,
  gameSettings: initGameSettings,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    clearTree: (state) => {
      state.toysOnTree = [];
    },
    moveToyFromTreeToSlot: (state, action: PayloadAction<IGameSlotToy>) => {
      const currentToy = action.payload;
      const { id, num } = currentToy;

      // удаляем этот элемент из state.toysOnTree
      state.toysOnTree = state.toysOnTree.filter((toy) => toy.id !== id);

      // добавляем этот элемент в state.toysOnSlotsObj
      state.toysOnSlotsObj[num].push(currentToy);
    },
    moveToyInsideTree: (state, action: PayloadAction<IGameTreeToy>) => {
      const { id } = action.payload;
      const index = state.toysOnTree.findIndex((toy) => toy.id === id);
      state.toysOnTree[index] = action.payload;
    },
    moveToyFromSlotToTree: (state, action: PayloadAction<IGameTreeToy>) => {
      const currentToy = action.payload;
      const { id, num } = currentToy;

      // удаляем этот элемент из state.toysOnSlotsObj
      state.toysOnSlotsObj[num] = state.toysOnSlotsObj[num].filter((toy) => toy.id !== id);

      // добавляем этот элемент в state.toysOnTree
      state.toysOnTree.push(currentToy);
    },
    setIsToyAboveTreeNow: (state, action: PayloadAction<boolean>) => {
      state.isToyAboveTreeNow = action.payload;
    },
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
        toys = toys.filter((toy) => Number(toy.num) <= SELECTED_TOYS_MAX_COUNT);
      }

      const toysOnSlotsObj: IGameToyCategory = toys.reduce((res, toy) => {
        const value = new Array(Number(toy.count))
          .fill('0')
          .map((_item, index) => ({ id: `${toy.num}-${index}`, num: toy.num }));

        res[toy.num] = value;

        return res;
      }, {} as IGameToyCategory);

      state.toysOnSlotsObj = toysOnSlotsObj;
    },
  },
});

export const {
  setIsLoading,
  setGameSettings,
  setGameToys,
  setIsToyAboveTreeNow,
  moveToyFromSlotToTree,
  moveToyInsideTree,
  moveToyFromTreeToSlot,
  clearTree,
} = gameSlice.actions;

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
export const gameToysOnSlotsSlice = (state: RootState): Array<Array<IGameSlotToy>> => {
  const toysCount = Object.keys(state.game.toysOnSlotsObj).length;
  if (!toysCount) {
    return [];
  }

  let arrayOfGameSlotToysArrays = Object.values(state.game.toysOnSlotsObj);
  if (toysCount < SELECTED_TOYS_MAX_COUNT) {
    arrayOfGameSlotToysArrays = [
      ...arrayOfGameSlotToysArrays,
      ...new Array(SELECTED_TOYS_MAX_COUNT - toysCount).fill([]),
    ];
  }

  return arrayOfGameSlotToysArrays;
};
export const gameToysOnTreeSlice = (state: RootState): Array<IGameTreeToy> => state.game.toysOnTree;
export const isToyAboveTreeNowSlice = (state: RootState): boolean => state.game.isToyAboveTreeNow;

export default gameSlice.reducer;
