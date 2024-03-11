'use strict';

let GameContents = {
  mainChar: {
    coordinates: {}
  },
  door: {
    coordinates: {}
  },
  key: {
    coordinates: {}
  }
};

console.log('wowee imma boutta load the level');
loadLevel();
renderPage();
