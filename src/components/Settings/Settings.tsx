import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToysData, setSettings, settingsSlice } from '../../redux/slices/toysSlice';
import { BUTTON_TYPES, ISettings } from '../../types/common';
import Button from '../Button/Button';
import QuantityFilter from '../QuantityFilter/QuantityFilter';
import YearFilter from '../YearFilter/YearFilter';

import './Settings.scss';

const Settings: FC = () => {
  const dispatch = useDispatch();

  const settings = useSelector(settingsSlice);

  const [quantityFilter, setQuantityFilter] = React.useState(settings.quantityFilter);

  const [yearFilter, setYearFilter] = React.useState(settings.yearFilter);

  const onApplyBtnClickHandler = () => {
    const newSettings: ISettings = {
      quantityFilter,
      yearFilter,
    };
    dispatch(setSettings(newSettings));
    dispatch(fetchToysData());
  };

  return (
    <div className="settings-container">
      <QuantityFilter value={quantityFilter} setValue={setQuantityFilter} />
      <YearFilter value={yearFilter} setValue={setYearFilter} />
      <div>
        <Button text="Применить" type={BUTTON_TYPES.BUTTON} onClick={onApplyBtnClickHandler} />
      </div>
    </div>
  );
};

export default Settings;
