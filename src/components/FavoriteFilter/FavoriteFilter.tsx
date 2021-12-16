import React, { FC } from 'react';

import './FavoriteFilter.scss';

interface Props {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const FavoriteFilter: FC<Props> = ({ value, setValue }: Props) => {
  const onClickHandler = () => {
    setValue(!value);
  };

  return (
    <div className="setting">
      <button className={value ? 'favorite-btn active' : 'favorite-btn'} onClick={onClickHandler}>
        Выбрать любимые
      </button>
    </div>
  );
};

export default FavoriteFilter;
