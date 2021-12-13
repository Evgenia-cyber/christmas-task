import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Popup from '../../components/Popup/Popup';
import SelectedToysCount from '../../components/SelectedToysCount/SelectedToysCount';
import ToysCards from '../../components/ToysCards/ToysCards';
import { isShowPopupSlice } from '../../redux/slices/toysSlice';

import './ToysPage.scss';

const ToysPage: FC = () => {
  const isShowPopup = useSelector(isShowPopupSlice);

  return (
    <PageTemplate>
      <div>
        <SelectedToysCount />
        <ToysCards />
      </div>
      {isShowPopup && <Popup />}
    </PageTemplate>
  );
};
export default ToysPage;
