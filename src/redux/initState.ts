import { MAX_QUANTITY, MIN_QUANTITY } from '../constants';

const selectedToysNumsFromLocalStorage = localStorage.getItem('toysNums');
const initSelectedToysNums = selectedToysNumsFromLocalStorage ? JSON.parse(selectedToysNumsFromLocalStorage) : [];

const settingsFromLocalStorage = localStorage.getItem('settings');
const initSettings = settingsFromLocalStorage
  ? JSON.parse(settingsFromLocalStorage)
  : { quantity: [MIN_QUANTITY, MAX_QUANTITY] };

export { initSelectedToysNums, initSettings };
