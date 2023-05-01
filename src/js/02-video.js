import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const updateTimeThrottle = throttle(updateTime, 1000);
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', updateTimeThrottle);
function updateTime({seconds}){
    localStorage.setItem("videoplayer-current-time", seconds);
}
player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time")))