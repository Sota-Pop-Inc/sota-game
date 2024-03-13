'use strict';



document.addEventListener('keydown', function(event) {
  let inv = GameContents.mainChar.inventory;
  if (event.key === 'z') {
    inv.pickaxe.breakWall();
  }
});


