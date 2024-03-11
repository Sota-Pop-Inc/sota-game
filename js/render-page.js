'use strict'

function renderPage() {
  const mainCharHTML = document.getElementById('mainChar');
  const doorHTML = document.getElementById('door');
  const keyHTML = document.getElementById('key');

  mainCharHTML.style.left = mainChar.coordinates.x + 'px';
  mainCharHTML.style.top = mainChar.coordinates.x + 'px';
  doorHTML.style.left = door.coordinates.x + 'px';
  doorHTML.style.top = door.coordinates.x + 'px';
  keyHTML.style.left = key.coordinates.x + 'px';
  keyHTML.style.top = key.coordinates.x + 'px';
}