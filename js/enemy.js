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
    }

    draw() {
        const prevStyle = this.ctx.fillStyle
        this.ctx.fillStyle = 'gray'
         this.ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        )
        this.ctx.fillStyle = prevStyle
    }

    move() {
        this.vy += this.g;
        this.x += this.vx;
        this.y += this.vy;
        
        
        
        if(this.y + this.h >= this.ctx.canvas.height){ //limit bottom
            this.y = this.ctx.canvas.height - this.h;
            this.vy = 0;
        }
    }
// collides bubble with enemy part A
    isVisible() {
        return this.alive && this.x + this.w > 0;
    }
    
    collides(player) {
    const colX = this.x < player.x + player.w && this.x + this.w > player.x;
    const colY = this.y + this.h > player.y && this.y < player.y + player.h;

    return colX && colY;
    }
}