'use strict';

function slimeAI() {
  let lastChoice = 'up';
  let perpChoice1 = 'right';
  let perpChoice2 = 'left';
  const currentLevel = levelNum;
  const slimeRepeatID = setInterval(function() {
    if (currentLevel < levelNum) {
      clearInterval(slimeRepeatID);
    }
    let directions = ['up', 'right', 'down', 'left', perpChoice1, perpChoice1, perpChoice1, perpChoice1, perpChoice2, perpChoice2, perpChoice2, perpChoice2, lastChoice, lastChoice, lastChoice, lastChoice, lastChoice, lastChoice, lastChoice, lastChoice];
    console.log(directions);
    let movementAttempting = true;
    while (movementAttempting) {
      let choice = Math.floor(Math.random() * 20);
      switch (directions[choice]) {
      case 'up':
        if (moveEntity('slime', 'y', -1, 1)) {
          movementAttempting = false;
          lastChoice = 'up';
        }
        break;
      case 'right':
        if (moveEntity('slime', 'x', 1, -1)) {
          movementAttempting = false;
          lastChoice = 'right';
        }
        break;
      case 'down':
        if (moveEntity('slime', 'y', 1, -1)) {
          movementAttempting = false;
          lastChoice = 'down';
        }
        break;
      case 'left':
        if (moveEntity('slime', 'x', -1, 1)) {
          movementAttempting = false;
          lastChoice = 'left';
        }
        break;
      }
    }
    if (lastChoice === 'up' || lastChoice === 'down') {
      perpChoice1 = 'right';
      perpChoice2 = 'left';
    } else {
      perpChoice1 = 'up';
      perpChoice2 = 'down';
    }
  }, 2000);
}

function moveEntity(entity, XorY, signFirst, signSecond) {
  let speed = 20;
  GameContents[entity].coordinates[XorY] += speed * signFirst;
  GameContents[entity].bottomRight[XorY] += speed * signFirst;
  for (let i = 0; i < GameContents.walls.length; i++) {
    if (checkSpecCollision(entity, GameContents.walls[i])) {
      GameContents[entity].coordinates[XorY] += speed * signSecond;
      GameContents[entity].bottomRight[XorY] += speed * signSecond;
      return false;
    }
  }
  GameContents[entity].coordinates[XorY] += speed * signFirst;
  GameContents[entity].bottomRight[XorY] += speed * signFirst;
  decreaseHealth();
  renderPage();
  return true;
}

