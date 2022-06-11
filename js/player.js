class Player {
  constructor(ctx, color = "blue") {
    this.ctx = ctx;

    this.x = 100;
    this.y = 250;

    this.vx = 0;
    this.vy = 0;

    this.w = 50;
    this.h = 50;

    this.g = 0.2;

    this.tick = 0;

    this.color = color;

    this.direction = "left";

    //bubbles

    this.bubbles = [];
    //this.direction = 'left'

    //this.score = new Score(ctx);

//image when walk 
    this.playerImage = new Image();
    this.playerImage.frames = 2;
    this.playerImage.frameIndex = 0;

    this.playerImage.src = "/img/dragoncillo.png";
// when pull shoot ////// pruebasss
    this.playerImageShoot = new Image();
    this.playerImageShoot.frames = 2;
    this.playerImageShoot.frameIndex = 0;

    this.playerImageShoot.src = "/img/roboto.png";
  }

  draw() {
    this.ctx.drawImage(
      this.playerImage,
      (this.playerImage.frameIndex * this.playerImage.width) /
        this.playerImage.frames,
      0,
      this.playerImage.width / 2, //modificar aca sprites
      this.playerImage.height, // modificar aca srites
      this.x,
      this.y,
      this.w,
      this.h

      
      );
      //pruebass
     

    //Bubble shot
    this.bubbles.forEach((bubble) => {
      bubble.draw();
    });
  }

  move() {
    this.vy += this.g;
    this.x += this.vx;
    this.y += this.vy;
    //limits
    if (this.y + this.h >= this.ctx.canvas.height * 0.9) {
      //limit bottom
      this.y = this.ctx.canvas.height * 0.9 - this.h;
      this.vy = 0;
    }

    if (this.x + this.w > this.ctx.canvas.width) {
      // limit right
      this.x = this.ctx.canvas.width - this.w;
      this.vx = 0;
    }

    if (this.x < this.ctx.canvas.width - this.ctx.canvas.width) {
      //limit left
      this.x = this.ctx.canvas.width - this.ctx.canvas.width;
      this.vx = 0;
    }

    //animate player
    this.tick++;

    if (this.tick >= 10) {
      this.tick = 0;
      this.animate();
    }

    //Bubbles
    this.bubbles.forEach((bubble) => {
      bubble.move();
    });

    this.bubbles = this.bubbles.filter((b) => b.isVisible());
  }

  // hit golpe
  /* hit(){
        this.score.dec()
    }

    isAlive(){
        return this.score.total > 0;
    }*/

  animate() {
    if (this.vx > 0 || this.vx < 0) {
      this.playerImage.frameIndex++;

      if (this.playerImage.frameIndex >= this.playerImage.frames) {
        this.playerImage.frameIndex = 0;
      }
    }
    
  }

  keyDown(key) {
    if (key === KEY_UP && this.vy === 0) {
      this.vy = -10;
    }

    if (key === KEY_RIGHT) {
      this.direction = "right";
      this.vx = 5;
      this.playerImage.src = "/img/dragoncillo.png"
    }
    if (key === KEY_LEFT) {
      this.direction = "left";
      this.vx = -5;
      this.playerImage.src = "/img/dragoncillo-2.png"
      
    }
    if (key === KEY_Z) {
      this.shoot();
      if(this.direction === "right"){

          this.playerImage.src = "/img/shoot.png"
      }
      if(this.direction === "left"){

        this.playerImage.src = "/img/shoot-left.png"
    }
    }

   
  }

  keyUp(key) {
    if (key === KEY_RIGHT || KEY_LEFT) {
      this.vx = 0;
      
      
    }
  
    if (key === KEY_Z) {
        
        this.playerImage.src = "/img/dragoncillo.png"
      }
   
    
  }

  shoot() {
    const bullet = new Bubble(
      this.ctx,
      this.x + this.w -30,
      this.y + this.h - 25,
      this
    );

    if (this.direction === "right") {
      bullet.vx = 6;
      bullet.vy = 0;
    }

    if (this.direction === "left") {
      bullet.x = this.x -30
      bullet.vx = -6;
      bullet.vy = 0;

    }

    this.bubbles.push(bullet);
  }
}
