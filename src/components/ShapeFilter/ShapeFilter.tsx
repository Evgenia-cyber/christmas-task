import React, { FC } from 'react';
import { ALL_SHAPES } from '../../constants';
import { IShape, SHAPES } from '../../types/common';
import ballImg from '../../assets/svg/ball.svg';
import bellImg from '../../assets/svg/bell.svg';
import coneImg from '../../assets/svg/cone.svg';
import snowflakeImg from '../../assets/svg/snowflake.svg';
import toyImg from '../../assets/svg/toy.svg';

import './ShapeFilter.scss';

interface Props {
  value: IShape;
  setValue: React.Dispatch<React.SetStateAction<IShape>>;
}

const ShapeFilter: FC<Props> = ({ value, setValue }: Props) => {
  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    const shape: SHAPES = event.currentTarget.dataset.shape as SHAPES;
    const shapes: IShape = { ...value };
    const isThisShapeAlreadyChecked = Object.prototype.hasOwnProperty.call(shapes, shape);
    if (isThisShapeAlreadyChecked) {
      delete shapes[shape];
    } else {
      shapes[shape] = ALL_SHAPES[shape];
    }

    setValue(shapes);
  };

  return (
    <div className="setting">
      <h3 className="setting-title">Форма:</h3>
      <div>
        {Object.keys(ALL_SHAPES).map((key) => {
          let imgSrc;
          switch (key) {
            case 'ball':
              imgSrc = ballImg;
              break;
            case 'bell':
              imgSrc = bellImg;
              break;
            case 'cone':
              imgSrc = coneImg;
              break;
            case 'snowflake':
              imgSrc = snowflakeImg;
              break;
            default:
              imgSrc = toyImg;
          }
          return (
            <button
              key={key}
              className={Object.prototype.hasOwnProperty.call(value, key) ? 'shape-btn active' : 'shape-btn'}
              onClick={onClickHandler}
              data-shape={key}
            >
              <img src={imgSrc} alt={ALL_SHAPES[key]} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShapeFilter;
