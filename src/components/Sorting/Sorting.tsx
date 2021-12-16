import React, { FC } from 'react';
import { ALL_SORTINGS } from '../../constants';
import { SORTINGS } from '../../types/common';

import './Sorting.scss';

interface Props {
  value: SORTINGS;
  setValue: React.Dispatch<React.SetStateAction<SORTINGS>>;
}

const Sorting: FC<Props> = ({ value, setValue }: Props) => {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const sorting: SORTINGS = event.currentTarget.dataset.sorting as SORTINGS;
    setValue(sorting);
  };

  return (
    <div className="setting">
      <h3 className="setting-title sorting">Сортировать</h3>
      <div>
        {ALL_SORTINGS.map((sorting) => (
          <button
            key={sorting}
            className={value === sorting ? 'sorting-btn active' : 'sorting-btn'}
            onClick={onClickHandler}
            data-sorting={sorting}
          >
            {sorting}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sorting;
