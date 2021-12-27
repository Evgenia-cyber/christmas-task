import React, { FC } from 'react';
import { ALL_SIZES } from '../../constants';
import { COLORS, ISize } from '../../types/common';

import './SizeFilter.scss';

interface Props {
  value: ISize;
  setValue: React.Dispatch<React.SetStateAction<ISize>>;
}

const SizeFilter: FC<Props> = ({ value, setValue }: Props) => {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const size: COLORS = event.currentTarget.dataset.size as COLORS;

    const sizes: ISize = { ...value };

    const isThisSizeAlreadyChecked = Object.prototype.hasOwnProperty.call(sizes, size);
    if (isThisSizeAlreadyChecked) {
      delete sizes[size];
    } else {
      sizes[size] = ALL_SIZES[size];
    }

    setValue(sizes);
  };

  return (
    <div className="setting">
      <h3 className="setting-title size-setting-title">Размер:</h3>
      <div>
        {Object.keys(ALL_SIZES).map((key) => (
          <button
            key={key}
            className={Object.prototype.hasOwnProperty.call(value, key) ? 'size-btn active' : 'size-btn'}
            onClick={onClickHandler}
            data-size={key}
          >
            {ALL_SIZES[key]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
