import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function({seconds}) {
   localStorage.setItem("videoplayer-current-time", seconds)
})
player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")))

 