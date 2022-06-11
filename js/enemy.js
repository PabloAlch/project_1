class Enemy {
    constructor(ctx) { //gray
        this.ctx = ctx;

        this.x = this.ctx.canvas.width;
        this.y = Math.random() * (this.ctx.canvas.height - 50);

        this.vx = -2
        this.vy = 0

        this.w = 50;
        this.h = 50;

        this.g = 0.2
 // collides bubble with enemy 
        this.alive = true
//image
        this.img = new Image();
        this.img.frames = 2;
        this.img.frameIndex = 0;
        this.img.src = '/img/roboto.png'
        
  
        this.tick = 0;
    }

    draw() {
        this.ctx.drawImage(
            this.img,
           (this.img.width * this.img.frameIndex) / this.img.frames , 
            0, 
           
            this.img.width / 2, 
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
         );
        
    }

    move() {
        this.vy += this.g;
        this.x += this.vx;
        this.y += this.vy;
        
        
        
        if(this.y + this.h >= this.ctx.canvas.height * 0.9){ //limit bottom
            this.y = this.ctx.canvas.height* 0.9 - this.h;
            this.vy = 0;
        }

        this.tick++;

        if (this.tick > 10) {
            this.tick = 0;
           
             this.img.frameIndex++;
       
             if (this.img.frameIndex >= this.img.frames) {
               this.img.frameIndex = 0;
             }
           }
    }
// collides bubble with enemy part A
    isVisible() {
        return this.alive && this.x + this.w > 0;
    }
    
    collides(player) {
    const colX = this.x < player.x + player.w - 10 && this.x + this.w > player.x + 10; // distancia de colision
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;

    return colX && colY;
    }
}

// codigo
/*
constructor(ctx) {
        this.ctx = ctx;
        this.x = this.ctx.canvas.width;
        this.y = Math.random() * this.ctx.canvas.height;
        this.w = 45
        this.h = 45
        this.vx = -5;
        this.vy = 0;
  
        this.ax = 0;   
        this.ay = 0;   //cuando suba la nave this.ay = -0.3  cuando baje la nave this.ay = 0.3
   
    
        this.img = new Image();
        this.img.frames = 3;
        this.img.frameIndex = 0;
        this.img.src = './img/malo1.png'
        
  
        this.tick = 0;
    }  
      
    draw() {
        this.ctx.drawImage(
            this.img,
           (this.img.width * this.img.frameIndex) / this.img.frames , 
            0, 
           
            this.img.width / 3, 
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h
         );
     }
      
    move() {
      this.vy += this.ay;
  
      this.vx += this.ax;
  
      this.x += this.vx;
      this.y += this.vy;

  
      this.tick++;

      
  
      if (this.tick > 10) {
       this.tick = 0;
      
        this.img.frameIndex++;
  
        if (this.img.frameIndex >= this.img.frames) {
          this.img.frameIndex = 0;
        }
      } 
    }
      
    isVisible() {
          return this.x + this.w > 0;
    }
      
    collides(player) {
          const colX =
            this.x <= player.x + player.w - 20 && this.x + this.w > player.x;
          const colY = this.y + this.h > player.y && this.y < player.y + player.h;
      
          return colX && colY;
    }

*/