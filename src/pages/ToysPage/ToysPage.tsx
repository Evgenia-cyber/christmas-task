import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import PageTemplate from '../../components/PageTemplate/PageTemplate';
import Popup from '../../components/Popup/Popup';
import Search from '../../components/Search/Search';
import SelectedToysCount from '../../components/SelectedToysCount/SelectedToysCount';
import Settings from '../../components/ToysSettings/ToysSettings';
import ToysCards from '../../components/ToysCards/ToysCards';
import { isShowPopupSlice } from '../../redux/slices/toysSlice';

import './ToysPage.scss';

const ToysPage: FC = () => {
  const isShowPopup = useSelector(isShowPopupSlice);

  return (
    <PageTemplate>
      <div className="page-content">
        <div className="page-content-left">
          <Search />
          <SelectedToysCount />
          <ToysCards />
        </div>
        <Settings />
      </div>
      {isShowPopup && <Popup />}
    </PageTemplate>
  );
};
export default ToysPage;
