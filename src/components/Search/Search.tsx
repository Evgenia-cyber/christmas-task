import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchInputValueSlice, setSearchInputValue } from '../../redux/slices/toysSlice';
import closeImg from '../../assets/svg/close.svg';

import './Search.scss';

const Search: FC = () => {
  const dispatch = useDispatch();

  const value = useSelector(searchInputValueSlice);

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { value: currentValue } = event.currentTarget;

    dispatch(setSearchInputValue(currentValue));
    console.log(currentValue);
  };

  const handlerOnResetBtnClick = () => {
    console.log('reset');
    dispatch(setSearchInputValue(''));
  };

  return (
    <form className="search-form" autoComplete="off">
      <input
        className="search-input"
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder="Найти..."
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
      />
      <button className="search-reset-btn" type="reset" onClick={handlerOnResetBtnClick}>
        <img src={closeImg} alt="Очистить" />
      </button>
    </form>
  );
};

export default Search;
