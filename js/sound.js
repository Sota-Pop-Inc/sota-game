let backgroundSound = document.querySelector('#background-sound');
let button = document.querySelector('#mute');

function toggleMute() {
  backgroundSound.muted = !backgroundSound.muted;
}

button.addEventListener('click', function() {
  toggleMute();
});

