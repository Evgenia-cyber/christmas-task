import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { TOY_IMAGE_URL } from '../../constants';

import './GameToy.scss';

interface Props {
  num: string;
  x?: string;
  y?: string;
}

const GameToy: FC<Props> = ({ num, x = '', y = '' }) => {
  const dispatch = useDispatch();

  // const ref = React.useRef<HTMLImageElement>(null);

  const onToyDragStart = (event: React.MouseEvent<HTMLImageElement>) => {
    const currentMovedToy = event.currentTarget;
    console.log('dragStart');
  };

  const onToyDranEnd = (event: React.MouseEvent<HTMLImageElement>) => {
    const currentMovedToy = event.currentTarget;
    console.log('dragEnd');
  };

  return (
    <img
      className="game-toy-img"
      style={x && y ? { position: 'absolute', left: x, top: y } : {}}
      src={`${TOY_IMAGE_URL}/${num}.png`}
      alt={`игрушка${num}`}
      onDragStart={onToyDragStart}
      onDragEnd={onToyDranEnd}
    />
  );
};

export default GameToy;
