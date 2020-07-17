class Monster extends Component {
  constructor(game) {
    super(game);
    this.x = 1200;
    this.y = Math.floor(Math.random() * 350 + 250); 
    this.width = 100;
    this.height = 100;
    this.speed = 10;
    this.img = new Image();
  }
  
  draw() {
    this.img.src = "imges/skeleton-idle_00.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() { //moves the monster randomly

    if (Math.floor(Math.random() * 20) % 3 === 0) this.x -= this.speed;
  }
};