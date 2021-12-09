import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import testReducer from './slices/testSlice';

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
