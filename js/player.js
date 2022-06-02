class Player {
    constructor(ctx, color ='blue') {
        this.ctx = ctx

        this.x = 50
        this.y = 200

        this.vx = 0
        this.vy = 0

        this.w = 40
        this.h = 50

        this.g = 0.2

        this.color = color
        
    }

    draw() {
        // save previous color -black default
        const prevColor = this.ctx.fillStyle
        
        //switch to instance color -red
        this.ctx.fillStyle = this.color

        // switch to instance color
        this.ctx.fillRect(
            this.x,
            this.y,
            this.w,
            this.h
        )
        
        // Restore previous color - black default
        this.ctx.fillStyle = prevColor
    }

    move() {
        this.vy += this.g;
        this.x += this.vx;
        this.y += this.vy;

        if(this.y + this.h >= this.ctx.canvas.height){ //limit bottom
            this.y = this.ctx.canvas.height - this.h;
            this.vy = 0;
        }

        if(this.x + this.w > this.ctx.canvas.width) { // limit right
            this.x = this.ctx.canvas.width - this.w;
            this.vx = 0;
        }

        if (this.x < this.ctx.canvas.width - this.ctx.canvas.width){ //limit left
            this.x = this.ctx.canvas.width - this.ctx.canvas.width;
            this.vx = 0;
        }

    }

    keyDown(key) {
        if (key === KEY_RIGHT) {
            this.vx = 5    
        }
        if (key === KEY_LEFT) {
            this.vx = -5
        }

        if (key === KEY_UP && this.vy === 0){
            this.vy = -10;
        }
    }

    keyUp(key) {
        if (key === KEY_RIGHT || KEY_LEFT){
            this.vx =0;
        }
    }
}