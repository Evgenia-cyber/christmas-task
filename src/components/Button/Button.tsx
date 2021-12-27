import React, { FC } from 'react';
import { BUTTON_TYPES } from '../../types/common';

import './Button.scss';

interface Props {
  text: string;
  type: BUTTON_TYPES;
  onClick: () => void;
  isDisable?: boolean;
}

const Button: FC<Props> = ({ text, type, onClick, isDisable = false }: Props) => (
  <button type={type} onClick={onClick} className="button" disabled={isDisable}>
    {text}
  </button>
);

export default Button;
