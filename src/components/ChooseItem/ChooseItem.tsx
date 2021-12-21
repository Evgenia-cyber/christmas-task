import React, { FC } from 'react';

import './ChooseItem.scss';

interface Props {
  settingTitle: string;
  countItems: number;
  imageUrl: string;
  imageExtension: string;
  imageAlt: string;
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
  activeItemNum: string;
  className: string;
}

const ChooseItem: FC<Props> = ({
  settingTitle,
  countItems,
  imageUrl,
  imageExtension,
  imageAlt,
  onClickHandler,
  activeItemNum,
  className,
}: Props) => (
  <div className="setting">
    <h3 className="setting-title">{settingTitle}</h3>
    <div className="game-setting">
      {new Array(countItems).fill(1).map((_item, index) => {
        const num = index + 1;

        return (
          <button
            key={num}
            className={Number(activeItemNum) === num ? `${className} active` : className}
            onClick={onClickHandler}
            data-settingvalue={num}
          >
            <img src={`${imageUrl}/${num}.${imageExtension}`} alt={imageAlt + num} />
          </button>
        );
      })}
    </div>
  </div>
);

export default ChooseItem;
