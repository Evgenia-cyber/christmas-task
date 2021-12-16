import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultSettings } from '../../redux/initState';
import { fetchToysData, resetFilters, resetSettings, setSettings, settingsSlice } from '../../redux/slices/toysSlice';
import { BUTTON_TYPES, ISettings } from '../../types/common';
import Button from '../Button/Button';
import ColorFilter from '../ColorFilter/ColorFilter';
import FavoriteFilter from '../FavoriteFilter/FavoriteFilter';
import QuantityFilter from '../QuantityFilter/QuantityFilter';
import ShapeFilter from '../ShapeFilter/ShapeFilter';
import SizeFilter from '../SizeFilter/SizeFilter';
import Sorting from '../Sorting/Sorting';
import YearFilter from '../YearFilter/YearFilter';

import './Settings.scss';

const Settings: FC = () => {
  const dispatch = useDispatch();

  const settings = useSelector(settingsSlice);

  const [quantityFilter, setQuantityFilter] = React.useState(settings.quantityFilter);

  const [yearFilter, setYearFilter] = React.useState(settings.yearFilter);

  const [colorFilter, setColorFilter] = React.useState(settings.colorFilter);

  const [sizeFilter, setSizeFilter] = React.useState(settings.sizeFilter);

  const [shapeFilter, setShapeFilter] = React.useState(settings.shapeFilter);

  const [favoriteFilter, setFavoriteFilter] = React.useState(settings.favoriteFilter);

  const [activeSorting, setActiveSorting] = React.useState(settings.sorting);

  const onApplyBtnClickHandler = () => {
    const newSettings: ISettings = {
      quantityFilter,
      yearFilter,
      colorFilter,
      sizeFilter,
      shapeFilter,
      favoriteFilter,
      sorting: activeSorting,
    };
    dispatch(setSettings(newSettings));
    dispatch(fetchToysData());
  };

  const resetLocalStateFilters = () => {
    setColorFilter(defaultSettings.colorFilter);
    setSizeFilter(defaultSettings.sizeFilter);
    setShapeFilter(defaultSettings.shapeFilter);
    setQuantityFilter(defaultSettings.quantityFilter);
    setYearFilter(defaultSettings.yearFilter);
    setFavoriteFilter(defaultSettings.favoriteFilter);
  };

  const resetLocalStateAllSettings = () => {
    resetLocalStateFilters();
    setActiveSorting(defaultSettings.sorting);
  };

  const onResetFiltersBtnClickHandler = () => {
    dispatch(resetFilters());
    dispatch(fetchToysData());
    resetLocalStateFilters();
  };

  const onResetAllBtnClickHandler = () => {
    dispatch(resetSettings());
    dispatch(fetchToysData());
    resetLocalStateAllSettings();
  };

  return (
    <div>
      <div className="settings-container">
        <Sorting value={activeSorting} setValue={setActiveSorting} />
        <ColorFilter value={colorFilter} setValue={setColorFilter} />
        <SizeFilter value={sizeFilter} setValue={setSizeFilter} />
        <ShapeFilter value={shapeFilter} setValue={setShapeFilter} />
        <QuantityFilter value={quantityFilter} setValue={setQuantityFilter} />
        <YearFilter value={yearFilter} setValue={setYearFilter} />
        <FavoriteFilter value={favoriteFilter} setValue={setFavoriteFilter} />
      </div>
      <div className="settings-buttons">
        <Button text="Применить" type={BUTTON_TYPES.BUTTON} onClick={onApplyBtnClickHandler} />
        <Button text="Сбросить фильтры" type={BUTTON_TYPES.BUTTON} onClick={onResetFiltersBtnClickHandler} />
        <Button text="Сбросить все настройки" type={BUTTON_TYPES.BUTTON} onClick={onResetAllBtnClickHandler} />
      </div>
    </div>
  );
};

export default Settings;
