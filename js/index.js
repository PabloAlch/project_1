const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const btn = document.getElementById('btn') //1
const game = new Game(ctx);
const play = document.getElementById('play')//2
const canvasGame = document.getElementById('canvas-game')//3

//1
btn.addEventListener('click', function (e){
    if (game.interval){
        game.stop();
        this.innerText = "START";
    } else {
        game.start();
        this.innerText = "STOP"
    }
});

play.addEventListener('click', function(){//2
    canvasGame.style.display = 'block'//3
    play.style.display = 'none'//2
})