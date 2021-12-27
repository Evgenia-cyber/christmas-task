import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GARLANDS } from '../../constants';
import { activeGarlandSlice, setActiveGarland } from '../../redux/slices/gameSlice';

import './GarlandSetting.scss';

const GarlandSetting: FC = () => {
  const dispatch = useDispatch();

  const activeGarland = useSelector(activeGarlandSlice);

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const { garland } = event.currentTarget.dataset;
    if (garland) {
      dispatch(setActiveGarland(garland));
    }
  };

  return (
    <div className="setting">
      <h3 className="setting-title">Гирлянды:</h3>
      <div className="garlands-setting">
        {GARLANDS.map((garland) => (
          <button
            key={garland}
            className={activeGarland === garland ? `${garland}-garland-setting active` : `${garland}-garland-setting`}
            onClick={onClickHandler}
            data-garland={garland}
          >
            {}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GarlandSetting;
