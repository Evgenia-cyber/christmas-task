import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ICommonSettingsState {
  isAudioPlay: boolean;
}

const initialState: ICommonSettingsState = {
  isAudioPlay: false,
};

export const commonSettingsSlice = createSlice({
  name: 'commonSettings',
  initialState,
  reducers: {
    toogleIsAudioPlay: (state, action: PayloadAction<boolean>) => {
      state.isAudioPlay = action.payload;
    },
  },
});

export const { toogleIsAudioPlay } = commonSettingsSlice.actions;

export const isAudioPlaySlice = (state: RootState): boolean => state.commonSettings.isAudioPlay;

export default commonSettingsSlice.reducer;
