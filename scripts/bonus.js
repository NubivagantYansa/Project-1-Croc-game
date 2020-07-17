class Bonus extends Component {
    constructor(game) {
      super(game);
      this.x = Math.floor(Math.random() * 900 + 20);
      this.y = Math.floor(Math.random() * 350 + 250);
      this.width = 100;
      this.height = 100;
      this.speed = 10;
      this.img = new Image();
    }
    
    draw() {
      this.img.src = "imges/bonus.png";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}
