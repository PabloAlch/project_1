const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

document.getElementById('btn').addEventListener('click', function (e){
    if (game.interval){
        game.stop();
        this.innerText = "START";
    } else {
        game.start();
        this.innerText = "STOP"
    }
});