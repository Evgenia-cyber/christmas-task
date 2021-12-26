import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommonSettings } from '../../types/common';
import { RootState } from '../store';
import { initCommonSettings } from '../initState';

interface ICommonSettingsState {
  settings: ICommonSettings;
}

const initialState: ICommonSettingsState = {
  settings: initCommonSettings,
};

export const commonSettingsSlice = createSlice({
  name: 'commonSettings',
  initialState,
  reducers: {
    toogleIsAudioPlay: (state, action: PayloadAction<boolean>) => {
      state.settings.isAudioPlay = action.payload;
      localStorage.setItem('commonSettings', JSON.stringify(state.settings));
    },
  },
});

export const { toogleIsAudioPlay } = commonSettingsSlice.actions;

export const isAudioPlaySlice = (state: RootState): boolean => state.commonSettings.settings.isAudioPlay;

export default commonSettingsSlice.reducer;
