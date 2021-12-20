import { DATA_URL } from '../constants';

const fetchAllToysData = async () => {
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return false;
  }
};

export default fetchAllToysData;
