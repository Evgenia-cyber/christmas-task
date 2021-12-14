import { MAX_QUANTITY, MIN_QUANTITY } from '../constants';
import getSelectedToysCount from '../utils/getSelectedToysCount';

const toysFromLocalStorage = localStorage.getItem('toys');
const initToys = toysFromLocalStorage ? JSON.parse(toysFromLocalStorage) : [];

const initSelectedToysCount = initToys.length > 0 ? getSelectedToysCount(initToys) : 0;

const settingsFromLocalStorage = localStorage.getItem('settings');
const initSettings = settingsFromLocalStorage
  ? JSON.parse(settingsFromLocalStorage)
  : { quantity: [MIN_QUANTITY, MAX_QUANTITY] };

export { initToys, initSelectedToysCount, initSettings };
