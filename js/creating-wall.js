function createWall(posX, posY) {
  let wall = document.createElement('div');
  wall.className = 'wall';

  document.main.appendchild(wall);

  wall.style.left = posX + 'px';
  wall.style.top = posY + 'px';

}
createWall(3, 6);
