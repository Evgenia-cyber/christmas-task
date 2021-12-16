import { ISettings, SORTINGS } from '../types/common';
import { MAX_QUANTITY, MAX_YEAR, MIN_QUANTITY, MIN_YEAR } from '../constants';

const selectedToysNumsFromLocalStorage = localStorage.getItem('toysNums');
const initSelectedToysNums = selectedToysNumsFromLocalStorage ? JSON.parse(selectedToysNumsFromLocalStorage) : [];

const settingsFromLocalStorage = localStorage.getItem('settings');
const defaultSettings: ISettings = {
  quantityFilter: [MIN_QUANTITY, MAX_QUANTITY],
  yearFilter: [MIN_YEAR, MAX_YEAR],
  colorFilter: {},
  sizeFilter: {},
  shapeFilter: {},
  favoriteFilter: false,
  sorting: SORTINGS.NAME_FROM_A,
};
const initSettings = settingsFromLocalStorage ? JSON.parse(settingsFromLocalStorage) : defaultSettings;

export { initSelectedToysNums, initSettings };
