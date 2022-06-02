class Enemy {
    constructor(ctx, color ='green') { //gray
        this.ctx = ctx;

        this.x = 300
        this.y = 100

        this.vx --
        this.vy = 0

        this.w = w
        this.h = h

        this.g = 0.2
    }

    draw() {
        // save previous color -black default
        const prevColor = this.ctx.fillStyle
        
        //switch to instance color -red
        this.ctx.fillStyle = 'green'

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
        this.x +=this.vx
    }

}