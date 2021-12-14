import React, { FC } from 'react';
import { MAX_QUANTITY, MIN_QUANTITY } from '../../constants';
import RangeSlider from '../RangeSlider/RangeSlider';

import './QuantityFilter.scss';

interface Props {
  value: Array<number>;
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
}

const QuantityFilter: FC<Props> = ({ value, setValue }: Props) => {
  const onChangeHandler = (currentValue: Array<number>) => {
    setValue(currentValue);
  };

  return (
    <div className="setting">
      <h3 className="setting-title">Количество экземпляров:</h3>
      <RangeSlider
        minValue={MIN_QUANTITY}
        maxValue={MAX_QUANTITY}
        value={value}
        onChangeHandler={onChangeHandler}
        units="шт."
      />
    </div>
  );
};

export default QuantityFilter;
