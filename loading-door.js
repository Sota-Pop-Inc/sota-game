function loadDoor () {
    let door = document.createElement('img');
    
    door.id = 'door'
    door.src = 'door.jpg';
    door.alt = 'Door Image';

    let mainElement = document.querySelector('main');
    mainElement.appendChild(door);

}
loadDoor();

let door = {
    coordinates: {
        x: value,
        y: value
    }
}