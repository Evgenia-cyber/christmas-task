import { SOUND_URL, SOUND_VOLUME } from '../constants';

type Sound = {
  audio: HTMLAudioElement | null;
  playSound(): void;
  stopSound(): void;
};

const sound: Sound = {
  audio: null,
  playSound() {
    const audio = new Audio(SOUND_URL);
    audio.volume = SOUND_VOLUME;
    audio.loop = true;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (this.audio && audio.onended) {
            this.audio.currentTime = 0;
            this.audio.pause();
          }
          this.audio = audio;
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  },
  stopSound() {
    if (this.audio) {
      this.audio.pause();
    }
  },
};

export default sound;
