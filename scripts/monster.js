class Monster extends Component {
  constructor(game) {
    super(game);
    this.x = 1250;
    this.y = Math.floor(Math.random() * 440 + 300); 
    this.width = 100;
    this.height = 100;
    this.img = new Image();
  }
  
  draw() {
    this.img.src = "imges/skeleton-idle_00.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move() {
    if (Math.floor(Math.random() * 20) % 3 === 0) {
      this.x -= 5;
    }
  }

  //  // helpers functions to get the four sides of the character
  //  bottom() { return this.y + this.height;}
  //  left () { return this.x; }
  //  right () { return this.x + this.width; }
  //  top () {return this.y;}
  
  //  crashCollision(element) {
    
  //   //if any of those conditions are true there is no collision
  //   if (this.top() > element.y + element.height || this.right() < element.x || this.bottom() < element.y || this.left() > element.x + element.width){

  //     return false;

  //   }
    
  //   return true;
      
  // }
}