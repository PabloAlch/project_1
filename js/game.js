class Game {
    constructor(ctx) {
        this.ctx = ctx;
        

        this.background = new Background(ctx);
        
        this.player = new Player(ctx);
        
        //this.enemy = new Enemy(ctx) // for clear after
        this.enemies = [];

        this.interval = null;
        
        this.setListeners();
        
        this.tick = 0;

        //this.audio = new Audio("..")
        //this.audio.loop = true
        //this.gameOverAudio = new Audio("..")+

        
    }       

    start() {
        // this.audio.play();

        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.checkCollisions();

            this.tick++;

            if(this.tick > Math.random() * 200 + 250) {  //250 / 100 = +enemy y 500 -enemy
                this.tick = 0
                this.addEnemy();
            }
        }, 1000 / 60);
        }

    stop() {
        //this.audio.pause();

        clearInterval(this.interval);
        this.interval = null;
    }

    addEnemy(){
        const enemy = new Enemy(this.ctx);
        this.enemies.push(enemy);
    }

    clear (){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.enemies = this.enemies.filter((e) => e.isVisible());
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.enemies.forEach((e) => e.draw())
        }

    move () {
        this.player.move();
        this.background.move();
        this.enemies.forEach((e) => e.move());
    }

     
    setListeners() {
        document.addEventListener('keydown', (e) =>{
            this.player.keyDown(e.keyCode);
        });
        
        document.addEventListener('keyup', (e) => {
            this.player.keyUp(e.keyCode);
        });
    }
 // Collisions    - Completed
    checkCollisions() {
        this.enemies.forEach((enemy) => {
          if (enemy.collides(this.player)) {
            console.log('colision!!!')
            //this.player.hit();
            this.gameOver();
            
            //return false
          }
          //return true
        });

       // bubble delete enemy - Completed
       this.enemies.forEach(enemy => {
           this.player.bubbles.forEach(bubble => {
               if (bubble.collides(enemy)) { //bubble.js
                    enemy.alive = false
                    bubble.alive = false
               }
           })
       })
// Bubble no colisiona con enemigo
       this.player.bubbles.forEach(bubble => {
           if (this.player.bubble > 100){
                bubble.alive = false
           }
            })
    }
       
 

      

      

    

    gameOver() {
    
    //this.gameOverAudio.play();
    
    this.stop();

    this.ctx.font = '80px Arial'
    this.ctx.fillText(
        "GAME OVER!!", 
        this.ctx.canvas.width * 0.3, 
        this.ctx.canvas.height / 2);

    this.enemies = [];
    this.player = new Player(ctx);
    
    }
}