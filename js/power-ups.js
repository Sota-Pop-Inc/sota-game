'use strict';

let powerups = ['pickaxe'];

function loadPowerUps() {
  let inv = GameContents.mainChar.inventory;

  function loadPickaxe() {
    inv.pickedUp = function() {
      console.log('picked up Pick');
      this.present = true;
      this.uses += 5;
      console.log(this.uses);
      console.log(this.present);
    };
    inv.present = false;
    inv.uses = 0;
    inv.breakWall = function() {
      if (inv.pickaxe.present) {
        const wallHTML = document.getElementById('wall-' + lastWallTouched);
        wallHTML.style.display = 'none';
        inv.pickaxe.uses--;
        GameContents.walls[lastWallTouched].coordinates.x = 0;
        GameContents.walls[lastWallTouched].coordinates.y = 0;
        GameContents.walls[lastWallTouched].bottomRight.x = 0;
        GameContents.walls[lastWallTouched].bottomRight.y = 0;
      }
    };
  }

  document.addEventListener('keydown', function(event) {
    let inv = GameContents.mainChar.inventory;
    if (event.key === 'z') {
      inv.pickaxe.breakWall();
    }
  });

  loadPickaxe();
}
