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

        this.alive = true //prueba
        // new Audio('').play();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        this.vy += this.g;
        this.x += this.vx;
        if(this.x >= this.player.x + 200){
            this.vx = 0
            this.g = -0.05
        }

        this.y += this.vy;
    }

// collides bubble with enemy
    collides(e) {
        const colX = this.x + this.r > e.x && this.x - this.r < e.x + e.w
        const colY = this.y + this.r > e.y && this.y - this.r < e.y + e.h
        return colX && colY
    }

// Part  'this.alive &&' es prueba
    isVisible(){
        return this.alive && this.x + this.r < this.ctx.canvas.width;
    }
}