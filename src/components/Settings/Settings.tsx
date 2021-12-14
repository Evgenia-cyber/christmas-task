import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSettings, settingsSlice } from '../../redux/slices/toysSlice';
import { BUTTON_TYPES, ISettings } from '../../types/common';
import Button from '../Button/Button';
import QuantityFilter from '../QuantityFilter/QuantityFilter';

import './Settings.scss';

const Settings: FC = () => {
  const dispatch = useDispatch();

  const settings = useSelector(settingsSlice);

  const [quantityFilter, setQuantityFilter] = React.useState(settings.quantityFilter);

  const onApplyBtnClickHandler = () => {
    const newSettings: ISettings = {
      quantityFilter,
    };
    console.log('apply', quantityFilter);
    dispatch(setSettings(newSettings));
  };

  return (
    <div className="settings-container">
      <QuantityFilter value={quantityFilter} setValue={setQuantityFilter} />
      <div>
        <Button text="Применить" type={BUTTON_TYPES.BUTTON} onClick={onApplyBtnClickHandler} />
      </div>
    </div>
  );
};

export default Settings;
