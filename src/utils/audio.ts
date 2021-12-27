import { SOUND_VOLUME, AUDIO_URL_FOR_HOME_PAGE } from '../constants';

const audio = new Audio(AUDIO_URL_FOR_HOME_PAGE);
audio.volume = SOUND_VOLUME;
audio.loop = true;

export default audio;
