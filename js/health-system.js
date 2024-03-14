'use strict';

function loadHealth() {
  GameContents.mainChar.health = 3;

  for (let i = 0; i < 3; i++) {
    const healthHTML = document.getElementById('health');
    const newHeart = document.createElement('img');
    newHeart.id = 'heart-' + i;
    newHeart.src = './assets/props/Heart.png';
    newHeart.alt = 'Heart';
    healthHTML.appendChild(newHeart);
  }
}

function decreaseHealth() {
  if (checkSpecCollision('mainChar', GameContents.slime)) {
    GameContents.mainChar.health--;
    const healthHTML = document.getElementById('health');
    healthHTML.firstChild.remove();

    if (GameContents.mainChar.health === 0) {
      const blackScreen = document.createElement('div');

      blackScreen.id = 'end-screen';

      const endMessage = document.createElement('p');

      endMessage.id = 'end-message';
      endMessage.textContent = 'GAME OVER\nReload the page to try again';

      const mainHTML = document.getElementById('main');
      mainHTML.appendChild(blackScreen);
      mainHTML.appendChild(endMessage);
      GameContents = {};
    }
  }
}
