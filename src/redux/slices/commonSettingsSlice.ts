import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICommonSettings } from '../../types/common';
import { RootState } from '../store';
import { defaultCommonSettings, initCommonSettings } from '../initState';

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
    offAudioAndSnow: (state) => {
      state.settings = defaultCommonSettings;
      localStorage.removeItem('commonSettings');
    },
    toogleIsAudioPlay: (state, action: PayloadAction<boolean>) => {
      state.settings.isAudioPlay = action.payload;
      localStorage.setItem('commonSettings', JSON.stringify(state.settings));
    },
    toogleIsSnow: (state, action: PayloadAction<boolean>) => {
      state.settings.isSnow = action.payload;
      localStorage.setItem('commonSettings', JSON.stringify(state.settings));
    },
  },
});

export const { toogleIsAudioPlay, toogleIsSnow, offAudioAndSnow } = commonSettingsSlice.actions;

export const isAudioPlaySlice = (state: RootState): boolean => state.commonSettings.settings.isAudioPlay;
export const isSnowSlice = (state: RootState): boolean => state.commonSettings.settings.isSnow;

export default commonSettingsSlice.reducer;
