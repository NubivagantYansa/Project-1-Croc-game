class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.croc = undefined;
        this.monster = [];
        this.marsh = [];
        this.gingerbHouse = [];
        this.backgroundImg = new Image();
        this.x = 0;
        this.y = 0;
        this.width = 1000;
        this.height = 800;
    }
  
    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.animate();
    }
  
    animate() {
        this.drawBackground();
        window.requestAnimationFrame(animate);
    }
  
    drawBackground() {
        this.backgroundImg.src = "imges/backgroundGrass.jpg";
        this.ctx.drawImage(
          this.backgroundImg,
          this.x,
          this.y,
          this.width,
          this.height
      );
    }
  
    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
  }
  
