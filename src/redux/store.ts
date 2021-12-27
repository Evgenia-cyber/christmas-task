import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import commonSettingsReducer from './slices/commonSettingsSlice';
import gameReducer from './slices/gameSlice';
import toysReducer from './slices/toysSlice';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
    commonSettings: commonSettingsReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
