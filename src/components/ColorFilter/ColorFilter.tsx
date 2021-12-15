import React, { FC } from 'react';
import { ALL_COLORS } from '../../constants';
import { IColor } from '../../types/common';

import './ColorFilter.scss';

interface Props {
  value: IColor;
  setValue: React.Dispatch<React.SetStateAction<IColor>>;
}

const ColorFilter: FC<Props> = ({ value, setValue }: Props) => {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const color = event.currentTarget.className.split(' ')[0];
    const colors: IColor = { ...value };
    const isThisColorAlreadyChecked = Object.prototype.hasOwnProperty.call(colors, color);
    if (isThisColorAlreadyChecked) {
      delete colors[color];
    } else {
      colors[color] = ALL_COLORS[color];
    }

    setValue(colors);
  };

  return (
    <div className="setting">
      <h3 className="setting-title">Цвет:</h3>
      <div>
        {Object.keys(ALL_COLORS).map((key) => (
          <button
            key={key}
            className={Object.prototype.hasOwnProperty.call(value, key) ? `${key} active` : key}
            onClick={onClickHandler}
          >
            {' '}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
