class House extends Component {
    constructor(game, x, y, w, h) {
      super(game, x, y, w, h);
    }
    draw() {
      this.img.src = "imges/GingerBreadHouse1.png";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}