class Background {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 0;
      this.y = 0;
      this.vx = -0.4;
  
      this.w = this.ctx.canvas.width;
      this.h = this.ctx.canvas.height;
  
      this.img = new Image();
      this.img.src = "/img/space background.jpg";
    }
  
    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  
      this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);
    }

    move() {
        this.x += this.vx;
    
        if (this.x <= -this.w) {
          this.x = 0;
        }
      }
    
}


/* const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const video = document.querySelector("video");

video.addEventListener('play', () => {
  function step() {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    requestAnimationFrame(step)
  }
  requestAnimationFrame(step);
})*/