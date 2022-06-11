class Score {
  constructor(ctx) {
      this.ctx = ctx
      this.x = this.ctx.canvas.width/2.3
      this.y = this.ctx.canvas.height*0.05
      this.value = 0
      
  }
  
  draw() {
      this.ctx.font = "25px Monospace"
      this.ctx.fillText(`Score: ${this.value}`, this.x, this.y)
  }
  
}