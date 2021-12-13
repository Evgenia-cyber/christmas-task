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

const SELECTED_TOYS_MAX_COUNT = 20;

export { HOME_PAGE_PATH, TOYS_PAGE_PATH, GAME_PAGE_PATH, DATA_URL, TOY_IMAGE_URL, NAV_LINKS, SELECTED_TOYS_MAX_COUNT };
