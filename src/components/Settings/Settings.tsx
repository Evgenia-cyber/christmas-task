import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToysData, setSettings, settingsSlice } from '../../redux/slices/toysSlice';
import { BUTTON_TYPES, ISettings } from '../../types/common';
import Button from '../Button/Button';
import ColorFilter from '../ColorFilter/ColorFilter';
import QuantityFilter from '../QuantityFilter/QuantityFilter';
import YearFilter from '../YearFilter/YearFilter';

import './Settings.scss';

const Settings: FC = () => {
  const dispatch = useDispatch();

  const settings = useSelector(settingsSlice);

  const [quantityFilter, setQuantityFilter] = React.useState(settings.quantityFilter);

  const [yearFilter, setYearFilter] = React.useState(settings.yearFilter);

  const [colorFilter, setColorFilter] = React.useState(settings.colorFilter);

  const onApplyBtnClickHandler = () => {
    const newSettings: ISettings = {
      quantityFilter,
      yearFilter,
      colorFilter,
    };
    dispatch(setSettings(newSettings));
    dispatch(fetchToysData());
  };

  return (
    <div className="settings-container">
      <ColorFilter value={colorFilter} setValue={setColorFilter} />
      <QuantityFilter value={quantityFilter} setValue={setQuantityFilter} />
      <YearFilter value={yearFilter} setValue={setYearFilter} />
      <div>
        <Button text="Применить" type={BUTTON_TYPES.BUTTON} onClick={onApplyBtnClickHandler} />
      </div>
    </div>
  );
};

export default Settings;
