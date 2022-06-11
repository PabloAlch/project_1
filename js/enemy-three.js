class EnemyThree { // copia de mario enemigo cae del cielo
    constructor(ctx) {
      this.ctx = ctx;
  
      const fromSky = Math.random() > 0.5;
  
      this.x = fromSky
        ? Math.random() * this.ctx.canvas.width
        : this.ctx.canvas.width;
      this.y = fromSky ? 0 : this.ctx.canvas.height * 0.85;
      this.r = 20;
      this.vx = 0;
      this.vy = 0;
      this.ay = fromSky ? 0.2 : 0;
      this.ax = fromSky ? 0 : -0.2;
  
      new Audio("./audio/fireball.wav").play();
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.closePath();
    }
  
    move() {
      this.vx += this.ax;
      this.vy += this.ay;
      this.x += this.vx;
      this.y += this.vy;
    }
  
    isVisible() {
      return this.y + this.r < this.ctx.canvas.height && this.x + this.r > 0;
    }
  
    collides(p) {
      const colX = this.x - this.r < p.x + p.w && this.x + this.r > p.x;
      const colY = this.y + this.r > p.y && this.y - this.r < p.y + p.h;
  
      return colX && colY;
    }
  }