export enum BUTTON_TYPES {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum COLORS {
  WHITE = 'белый',
  YELLOW = 'желтый',
  RED = 'красный',
  BLUE = 'синий',
  GREEN = 'зелёный',
}

// Расширяя IColor Record<string, any>, вы
// позволяете объекту содержать другие string
// ключи any значений наряду с определенными
// в интерфейсе.
// Также все еще есть автозаполнение для определенных свойств.
export interface IColor extends Record<string, any> {
  white?: COLORS.WHITE;
  yellow?: COLORS.YELLOW;
  red?: COLORS.RED;
  blue?: COLORS.BLUE;
  green?: COLORS.GREEN;
}

export interface IToy {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: COLORS;
  size: string;
  favorite: boolean;
  isSelected?: boolean;
}

export interface ISettings {
  quantityFilter: Array<number>;
  yearFilter: Array<number>;
  colorFilter: IColor;
}
