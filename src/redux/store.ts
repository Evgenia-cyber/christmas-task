import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import toysReducer from './slices/toysSlice';

export const store = configureStore({
  reducer: {
    toys: toysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
