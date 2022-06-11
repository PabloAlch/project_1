class Bubble {
    constructor(ctx, x, y, player){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = 18;
        this.g = 0;


        this.vx = 8;
        this.vy = 0;
        this.player = player

        this.alive = true 
        // new Audio('').play();


        //image
        this.w = 50
        this.h = 50
        this.img = new Image();
        this.img.frames = 5;
        this.img.frameIndex = 0;
        this.img.src = '/img/bubble.png'
        
  
        this.tick = 0;
    }

    draw() {
        
//image        
        this.ctx.drawImage(
            this.img,
           (this.img.width * this.img.frameIndex) / this.img.frames , 
            0, 
           
            this.img.width / 5, 
            this.img.height,
            this.x,
            this.y-25,
            this.w,
            this.h
         );

       /*this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();*/
    }

    move() {
        this.vy += this.g;
        this.x += this.vx;
        if(this.x >= this.player.x + 200){
           
            this.alive = false
        }

        if(this.x <= this.player.x - 200){
            this.alive = false
        }


        this.y += this.vy;
//image
        this.tick++;

        if (this.tick > 5) {//speed frames per second
            this.tick = 0;
           
             this.img.frameIndex++;
       
             if (this.img.frameIndex >= this.img.frames) {
               this.img.frameIndex = 0;
             }
           }
    }

// collides bubble with enemy
    collides(e) {
        const colX = this.x + this.r > e.x && this.x - this.r < e.x + e.w
        const colY = this.y + this.r > e.y && this.y - this.r < e.y + e.h
        return colX && colY
    }

// Part  'this.alive &&' es prueba//////////////////
    isVisible(){
        return this.alive && this.x + this.r < this.ctx.canvas.width;
    }
}