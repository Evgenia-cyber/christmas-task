import { COLORS, IColor, ISize, SIZES, IShape, SHAPES, SORTINGS } from './types/common';

const HOME_PAGE_PATH = '/';
const TOYS_PAGE_PATH = 'toys';
const GAME_PAGE_PATH = 'game';

const NAV_LINKS = [
  { to: HOME_PAGE_PATH, text: '' },
  { to: TOYS_PAGE_PATH, text: 'Игрушки' },
  { to: GAME_PAGE_PATH, text: 'Ёлка' },
];

const DATA_URL = 'https://raw.githubusercontent.com/Evgenia-cyber/christmas-data/main/data.json';
const TOY_IMAGE_URL = 'https://raw.githubusercontent.com/Evgenia-cyber/christmas-data/main/assets/toys';
const BG_IMAGE_URL = 'https://raw.githubusercontent.com/Evgenia-cyber/christmas-data/main/assets/bg';
const TREE_IMAGE_URL = 'https://raw.githubusercontent.com/Evgenia-cyber/christmas-data/main/assets/tree';

const SELECTED_TOYS_MAX_COUNT = 20;

const MIN_QUANTITY = 1;
const MAX_QUANTITY = 12;

const MIN_YEAR = 1940;
const MAX_YEAR = 2020;

const ALL_COLORS: IColor = {
  white: COLORS.WHITE,
  yellow: COLORS.YELLOW,
  red: COLORS.RED,
  blue: COLORS.BLUE,
  green: COLORS.GREEN,
};

const ALL_SIZES: ISize = {
  large: SIZES.LARGE,
  medium: SIZES.MEDIUM,
  small: SIZES.SMALL,
};

const ALL_SHAPES: IShape = {
  ball: SHAPES.BALL,
  bell: SHAPES.BELL,
  cone: SHAPES.CONE,
  snowflake: SHAPES.SNOWFLAKE,
  toy: SHAPES.TOY,
};

const ALL_SORTINGS = [SORTINGS.NAME_FROM_A, SORTINGS.NAME_FROM_Z, SORTINGS.COUNT_UP, SORTINGS.COUNT_DOWN];

const SOUND_VOLUME = 0.3;
const SOUND_URL = 'https://now.morsmusic.org/load/1137278702/Bobby_Helms..(musmore.com).mp3';

const TREE_COUNT = 4;
const DEFAULT_ACTIVE_TREE = '1';
const BG_COUNT = 8;
const DEFAULT_ACTIVE_BG = '1';

export {
  HOME_PAGE_PATH,
  TOYS_PAGE_PATH,
  GAME_PAGE_PATH,
  DATA_URL,
  TOY_IMAGE_URL,
  NAV_LINKS,
  SELECTED_TOYS_MAX_COUNT,
  MIN_QUANTITY,
  MAX_QUANTITY,
  MIN_YEAR,
  MAX_YEAR,
  ALL_COLORS,
  ALL_SIZES,
  ALL_SHAPES,
  ALL_SORTINGS,
  SOUND_VOLUME,
  SOUND_URL,
  BG_IMAGE_URL,
  TREE_IMAGE_URL,
  TREE_COUNT,
  DEFAULT_ACTIVE_TREE,
  BG_COUNT,
  DEFAULT_ACTIVE_BG,
};
