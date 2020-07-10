class Marsh extends Component {
    constructor(game) {
      super(game);
      this.x = Math.floor(Math.random() * 200 + 20);
      this.y = 810;
      this.width = 80;
      this.height = 80;
      this.speed = 2;
      this.img = new Image();
    }
    
    draw() {
      this.img.src = "imges/marsh.png";
      this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  
    move() {
      if (Math.floor(Math.random() * 20) % 3 === 0) { //if created a marsh make it move
        this.y -= this.speed;
      }
    }

  }
  