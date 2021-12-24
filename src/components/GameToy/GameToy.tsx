import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOY_IMAGE_URL } from '../../constants';
import {
  isToyAboveTreeNowSlice,
  moveToyFromSlotToTree,
  moveToyFromTreeToSlot,
  moveToyInsideTree,
  setIsToyAboveTreeNow,
} from '../../redux/slices/gameSlice';

import './GameToy.scss';

interface Props {
  id: string;
  num: string;
  x?: string;
  y?: string;
}

const GameToy: FC<Props> = ({ id, num, x = '', y = '' }) => {
  const dispatch = useDispatch();

  const isToyAboveTreeNow = useSelector(isToyAboveTreeNowSlice);

  const onToyDranEnd = (event: React.MouseEvent<HTMLImageElement>) => {
    const isToyWasOnTree = x && y;

    if (isToyAboveTreeNow) {
      const currentMovedToy = event.currentTarget;
      const newX = `${event.pageX - currentMovedToy.offsetWidth / 2}px`;
      const newY = `${event.pageY - currentMovedToy.offsetHeight / 2}px`;

      const newToyData = { id, num, x: newX, y: newY };

      if (isToyWasOnTree) {
        dispatch(moveToyInsideTree(newToyData));
      } else {
        dispatch(moveToyFromSlotToTree(newToyData));
      }

      dispatch(setIsToyAboveTreeNow(false));
    } else if (isToyWasOnTree) {
      dispatch(moveToyFromTreeToSlot({ id, num }));
    }
  };

  return (
    <img
      className="game-toy-img"
      style={x && y ? { position: 'absolute', left: x, top: y, width: '45px' } : {}}
      src={`${TOY_IMAGE_URL}/${num}.png`}
      alt={`игрушка${num}`}
      onDragEnd={onToyDranEnd}
    />
  );
};

export default GameToy;
