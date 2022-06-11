class Score {
  constructor(ctx) {
      this.ctx = ctx
      this.x = this.ctx.canvas.width/2.3
      this.y = this.ctx.canvas.height*0.1
      this.value = 0
      
  }
  
  draw() {
    this.ctx.font = "30px ArcadeClassic";
      ctx.fillStyle = '#F9DC5C';
      this.ctx.fillText(`By pablo.alch`, this.x - 320, this.y)

    this.ctx.font = "30px ArcadeClassic";
      ctx.fillStyle = 'white';
      this.ctx.fillText(`Score: ${this.value}`, this.x, this.y)
  }
  
}