import { IShape, IColor, ISize } from '../types/common';

type Filter = IColor | ISize | IShape;

const getFiltersArrFromObj = (currentFiltresObj: Filter, allFiltersObj: Filter) => {
  let filters = Object.values(currentFiltresObj);
  if (filters.length === 0) {
    filters = Object.values(allFiltersObj);
  }

  return filters;
};

export default getFiltersArrFromObj;
