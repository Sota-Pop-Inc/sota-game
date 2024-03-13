let backgroundSound = document.querySelector('#background-sound');
let button = document.querySelector('#mute');


function toggleMute() {
  if (backgroundSound.paused) {
    backgroundSound.play();
    button.textContent = 'Pause';
  } else {
    backgroundSound.pause();
    button.textContent = 'Play';
  }
}

button.addEventListener('click', toggleMute);
