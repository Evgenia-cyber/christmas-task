import { MAX_QUANTITY, MAX_YEAR, MIN_QUANTITY, MIN_YEAR } from '../constants';

const selectedToysNumsFromLocalStorage = localStorage.getItem('toysNums');
const initSelectedToysNums = selectedToysNumsFromLocalStorage ? JSON.parse(selectedToysNumsFromLocalStorage) : [];

const settingsFromLocalStorage = localStorage.getItem('settings');
const initSettings = settingsFromLocalStorage
  ? JSON.parse(settingsFromLocalStorage)
  : { quantityFilter: [MIN_QUANTITY, MAX_QUANTITY], yearFilter: [MIN_YEAR, MAX_YEAR] };

export { initSelectedToysNums, initSettings };
