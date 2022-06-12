class Game {
    constructor(ctx) {
        this.ctx = ctx;
        

        this.background = new Background(ctx);
        
        this.player = new Player(ctx);
        
        //this.enemy = new Enemy(ctx) // for clear after
        this.enemies = [];
        this.lifes = []; // lifes collision

        this.interval = null;
        
        this.setListeners();
        
        this.tick = 0;

        //this.audio = new Audio("..")
        //this.audio.loop = true
        //this.gameOverAudio = new Audio("..")+
        
        //SCORE
        this.score = new Score(ctx);

        //LIFES
        this.setUpHearts(3)
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
        this.lifes.forEach((e) => e.draw());
        this.score.draw();
        }

    move () {
        this.player.move();
        this.background.move();
        this.enemies.forEach((e) => e.move());
        this.lifes.forEach((e) => e.move());
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
            enemy.alive = false
            this.lifes.pop()
            if (this.lifes.length === 0){
                this.gameOver();
            }
            
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
                    this.updateScore()
               }
           })
       })
    //EJEMPLO ENEMIGO 2  O 3 
       /* this.enemies.forEach(enemy => {
           this.player.bubbles.forEach(bubble => {
               if (bubble.collides(enemy)) { //bubble.js
                    enemy.alive = false
                    bubble.alive = false
               }
           })
       })*/


       // Bubble no colisiona con enemigo // Quizas no funciona
      /* this.player.bubbles.forEach(bubble => {
           if (this.player.bubble > 100){
                bubble.alive = false
           }
            })*/
    }
       
    updateScore(){
        this.score.value += 80
      }
    //lifes
    setUpHearts(numberOfLifes) {
        for (let i = 1; i <= numberOfLifes; i++){
            this.lifes.push(new Life(this.ctx, this.ctx.canvas.width - 60 * i, 20))
        } 
      }  
      
    gameOver() {
    
    //this.gameOverAudio.play();
    
    this.stop();

    this.ctx.font = '80px ArcadeClassic'
    this.ctx.fillText(
        "GAME OVER", 
        this.ctx.canvas.width * 0.3, 
        this.ctx.canvas.height / 2);
    
    this.ctx.font = '20px ArcadeClassic'
    this.ctx.fillText(
        'Press   "BUTTON"   to   try   again', 
        this.ctx.canvas.width * 0.33, 
        this.ctx.canvas.height - 200);

    this.enemies = [];
    this.player = new Player(ctx);
    this.setUpHearts(3)
    this.score.value = 0
    
    }
}