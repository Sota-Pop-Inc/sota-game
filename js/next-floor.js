'use strict';

function newFloor() {
  stopTimer();
  resetPage();

  const blackScreen = document.createElement('div');

  blackScreen.id = 'floor-interim';

  const mainHTML = document.getElementById('main');
  mainHTML.appendChild(blackScreen);

  const nextLevelAudio = document.getElementById('next-level');
  nextLevelAudio.play();

  setTimeout(function() {
    loadLevel();
    renderPage();

    blackScreen.remove();
  }, 1500);
}
