'use strict';

function renderPage() {
  const mainCharHTML = document.getElementById('mainChar');
  const doorHTML = document.getElementById('door');
  const keyHTML = document.getElementById('key');
  const wallHTML = document.getElementById('wall');

  mainCharHTML.style.left = GameContents.mainChar.coordinates.x + 'px';
  mainCharHTML.style.top = GameContents.mainChar.coordinates.y + 'px';
  doorHTML.style.left = GameContents.door.coordinates.x + 'px';
  doorHTML.style.top = GameContents.door.coordinates.y + 'px';
  keyHTML.style.left = GameContents.key.coordinates.x + 'px';
  keyHTML.style.top = GameContents.key.coordinates.y + 'px';
  wallHTML.style.left = GameContents.wallVert.coordinates.x + 'px';
  wallHTML.style.top = GameContents.wallVert.coordinates.y + 'px';
  console.log('rendered');
}
