let health = 3;

function decreaseHealth() {
  health --;
  

  if (health === 0) {
    alert('Game Over!');
  }
}

function checkAndDecrease(object) {
  if (checkSpecCollision(object)) {
    decreaseHealth();
  }
}


