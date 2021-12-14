import React, { FC } from 'react';
import { MAX_YEAR, MIN_YEAR } from '../../constants';
import RangeSlider from '../RangeSlider/RangeSlider';

import './YearFilter.scss';

interface Props {
  value: Array<number>;
  setValue: React.Dispatch<React.SetStateAction<number[]>>;
}

const YearFilter: FC<Props> = ({ value, setValue }: Props) => {
  const onChangeHandler = (currentValue: Array<number>) => {
    setValue(currentValue);
  };

  return (
    <div className="setting">
      <h3 className="setting-title">Год приобретения:</h3>
      <RangeSlider minValue={MIN_YEAR} maxValue={MAX_YEAR} value={value} onChangeHandler={onChangeHandler} units="г." />
    </div>
  );
};

export default YearFilter;
