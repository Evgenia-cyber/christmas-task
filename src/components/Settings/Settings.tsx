import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToysData, setSettings, settingsSlice } from '../../redux/slices/toysSlice';
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
      <div>
        <Button text="Применить" type={BUTTON_TYPES.BUTTON} onClick={onApplyBtnClickHandler} />
      </div>
    </div>
  );
};

export default Settings;
