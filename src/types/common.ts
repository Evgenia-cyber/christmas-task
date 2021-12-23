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

export enum SIZES {
  LARGE = 'большой',
  MEDIUM = 'средний',
  SMALL = 'маленький',
}
export enum SHAPES {
  BALL = 'шар',
  BELL = 'колокольчик',
  CONE = 'шишка',
  SNOWFLAKE = 'снежинка',
  TOY = 'фигурка',
}

export enum SORTINGS {
  NAME_FROM_A = 'По названию от „А“ до „Я“',
  NAME_FROM_Z = 'По названию от „Я“ до „А“',
  COUNT_UP = 'По количеству по возрастанию',
  COUNT_DOWN = 'По количеству по убыванию',
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

export interface ISize extends Record<string, any> {
  large?: SIZES.LARGE;
  medium?: SIZES.MEDIUM;
  small?: SIZES.SMALL;
}

export interface IShape extends Record<string, any> {
  ball?: SHAPES.BALL;
  bell?: SHAPES.BELL;
  cone?: SHAPES.CONE;
  snowflake?: SHAPES.SNOWFLAKE;
  toy?: SHAPES.TOY;
}

export interface IToy {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: SHAPES;
  color: COLORS;
  size: SIZES;
  favorite: boolean;
  isSelected?: boolean;
}

export interface IGameSlotToy {
  id: string;
  num: string;
}

export interface IGameTreeToy extends IGameSlotToy {
  x: string;
  y: string;
}

export interface IGameToyCategory {
  toysOnSlot: Array<IGameSlotToy>;
}

export interface ISettings {
  quantityFilter: Array<number>;
  yearFilter: Array<number>;
  colorFilter: IColor;
  sizeFilter: ISize;
  shapeFilter: IShape;
  favoriteFilter: boolean;
  sorting: SORTINGS;
}

export interface IGameSettings {
  activeTreeNum: string;
  activeBgNum: string;
}
