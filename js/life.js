class Life {
    constructor(ctx, x, y) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
  
      this.w = 40;
      this.h = 40;
  
      this.img = new Image();
      this.img.frames = 2;
      this.img.frameIndex = 0;
      this.img.src = "/img/life.png";
  
      this.tick = 0;
    }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        (this.img.width * this.img.frameIndex) / this.img.frames,
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
      this.tick++;
  
      if (this.tick > 30) {
        this.tick = 0;
  
        this.img.frameIndex++;
  
        if (this.img.frameIndex >= this.img.frames) {
          this.img.frameIndex = 0;
        }
      }
    }
  }