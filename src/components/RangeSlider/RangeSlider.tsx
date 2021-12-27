import React, { FC } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import 'rc-tooltip/assets/bootstrap.css';

import './RangeSlider.scss';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

interface Props {
  minValue: number;
  maxValue: number;
  value: Array<number>;
  onChangeHandler: (currentValue: Array<number>) => void;
  units: string;
}

const RangeSlider: FC<Props> = ({ minValue, maxValue, value, onChangeHandler, units }: Props) => {
  const setTooltip = (tooltipValue: number) => tooltipValue + units;

  return (
    <div className="range-slider">
      <Range
        marks={{
          [minValue]: { label: `${minValue + units}`, style: { color: '#ffffff' } },
          [maxValue]: { label: `${maxValue + units}`, style: { color: '#ffffff' } },
        }}
        min={minValue}
        max={maxValue}
        onChange={onChangeHandler}
        value={value}
        tipFormatter={setTooltip}
        tipProps={{
          placement: 'top',
          visible: true,
        }}
      />
    </div>
  );
};

export default RangeSlider;
