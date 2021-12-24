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

const IMAGE_MAP_FOR_TREE = {
  1: '227,14,238,66,261,120,314,220,342,334,378,452,360,531,218,539,60,526,78,360,111,296,143,203,201,90',
  2: '229,19,263,94,299,155,345,268,384,386,374,497,247,540,135,511,67,485,78,355,120,248,145,168',
  // eslint-disable-next-line max-len
  3: '223,14,262,79,258,129,281,128,281,161,318,194,292,243,348,289,336,348,391,360,344,410,390,450,352,507,266,546,174,542,89,517,42,437,85,419,80,372,108,334,97,293,123,239,116,187',
  4: '220,9,414,469,305,536,139,538,21,456',
};

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
  IMAGE_MAP_FOR_TREE,
};
