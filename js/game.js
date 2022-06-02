class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.interval = null;

        //this.background = new Background(ctx);
        this.player = new Player(ctx);
        //this.enemies = [];
        this.enemy = new Enemy(ctx) // for clear after
        //this.tick = 0;

        //this.audio = new Audio("..")
        //this.audio.loop = true
        //this.gameOverAudio = new Audio("..")+

        this.setListeners();
    }       

    start() {
        // this.audio.play();

        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            //this.checkCollisions();

            // falta colocar tick
        }, 1000 / 60);
        }
    
    clear (){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //thid.enemies = this.enemies.filter((e) => e.isVisible());
    }

    draw() {
        //this.bg.draw();
        this.player.draw();
        this.enemy.draw(); // for clear!
        //this.enemies.forEach((e) => e.draw());
    }

    move () {
        this.player.move();
        // se movera el bg??  -  this.bg.move();
        //this.enemies.forEach((e) => e.draw());
    }

    stop() {
        //this.audio.pause();

        clearInterval(this.interval);
        this.interval = null;
    }

    setListeners() {
        document.addEventListener('keydown', (e) =>{
            this.player.keyDown(e.keyCode);
        });
        
        document.addEventListener('keyup', (e) => {
            this.player.keyUp(e.keyCode);
        });
    }


    //gameOver()
}