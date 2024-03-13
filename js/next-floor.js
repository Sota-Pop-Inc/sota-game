'use strict';

let levelNum = 2;

function newFloor() {
  stopTimer();
  resetPage();

  const blackScreen = document.createElement('div');

  blackScreen.id = 'floor-interim';

  const levelMessage = document.createElement('p');

  levelMessage.id = 'level-message';
  levelMessage.textContent = 'Level ' + levelNum;
  levelNum++;

  const mainHTML = document.getElementById('main');
  mainHTML.appendChild(blackScreen);
  mainHTML.appendChild(levelMessage);

  const nextLevelAudio = document.getElementById('next-level');
  nextLevelAudio.play();

  setTimeout(function() {
    loadLevel();
    renderPage();

    blackScreen.remove();
  }, 1500);
}
