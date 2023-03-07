
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById('btn__reset').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();

});

document.getElementById('qwerty').addEventListener('click', (e) => {
    if ( e.target.tagName === 'BUTTON' ) {
         game.handleInteraction(e.target);
    };
});

document.addEventListener('keyup', (e) => {
    const keys = document.getElementsByClassName('key');
    for (let i = 0; i < keys.length; i++){
        if (keys[i].innerText === e.key){
            game.handleInteraction(keys[i]);
        }
    }
});
