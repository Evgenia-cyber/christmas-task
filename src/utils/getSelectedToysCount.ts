import { IToy } from '../types/common';

const getSelectedToysCount = (toysArr: Array<IToy>) => toysArr.filter((toy: IToy) => toy.isSelected).length;

export default getSelectedToysCount;
