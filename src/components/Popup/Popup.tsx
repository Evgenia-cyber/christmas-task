import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setIsShowPopup } from '../../redux/slices/toysSlice';
import { SELECTED_TOYS_MAX_COUNT } from '../../constants';
import closeImg from '../../assets/svg/close.svg';

import './Popup.scss';

const Popup: FC = () => {
  const dispatch = useDispatch();

  const onCloseBtnHandler = () => {
    dispatch(setIsShowPopup(false));
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="popup-close-btn" onClick={onCloseBtnHandler}>
          <img src={closeImg} alt="Снег" />
        </button>
        <p> Количество выбранных видов игрушек не может быть более {SELECTED_TOYS_MAX_COUNT}</p>
      </div>
    </div>
  );
};

export default Popup;
