'use strict';

let levelNum = 1;
let score = 0;

function newFloor() {
  timer(false);
  resetPage();

  const blackScreen = document.createElement('div');

  blackScreen.id = 'floor-interim';

  const levelMessage = document.createElement('p');

  levelMessage.id = 'level-message';
  levelMessage.textContent = 'Level ' + (levelNum + 1);
  levelNum++;

  const scoreHTML = document.getElementById('score');
  scoreHTML.textContent = 'Score: ' + score;

  const mainHTML = document.getElementById('main');
  mainHTML.appendChild(blackScreen);
  mainHTML.appendChild(levelMessage);

  const nextLevelAudio = document.getElementById('next-level');
  nextLevelAudio.play();

  setTimeout(function() {
    loadLevel();
    renderPage();

    blackScreen.remove();
    levelMessage.remove();
  }, 1500);
}
