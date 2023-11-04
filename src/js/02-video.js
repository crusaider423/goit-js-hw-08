import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(
    e =>
      localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(e.seconds)
      ),
    1000
  )
);

const storageTimePars = localStorage.getItem('videoplayer-current-time');

if (storageTimePars !== null) {
  player.setCurrentTime(JSON.parse(storageTimePars));
}
