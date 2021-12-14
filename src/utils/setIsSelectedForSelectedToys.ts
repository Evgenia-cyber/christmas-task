import { IToy } from '../types/common';

const setIsSelectedForSelectedToys = (toys: Array<IToy>, selectedToysNums: Array<string>) =>
  toys.map((toy) => {
    if (selectedToysNums.includes(toy.num)) {
      toy.isSelected = true;
    }
    return toy;
  });

export default setIsSelectedForSelectedToys;
