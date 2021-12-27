import { SORTINGS, IToy } from '../types/common';

const getSortingFunc = (activeSorting: SORTINGS) => {
  switch (activeSorting) {
    case SORTINGS.COUNT_UP:
      return (a: IToy, b: IToy) => Number(a.count) - Number(b.count);
    case SORTINGS.COUNT_DOWN:
      return (a: IToy, b: IToy) => Number(b.count) - Number(a.count);
    case SORTINGS.NAME_FROM_Z:
      return (a: IToy, b: IToy) => {
        const { name: nameA } = a;
        const { name: nameB } = b;
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;
      };
    default:
      return (a: IToy, b: IToy) => {
        const { name: nameA } = a;
        const { name: nameB } = b;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      };
  }
};

export default getSortingFunc;
