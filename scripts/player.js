class Player extends Component {
    constructor(game, x, y, w, h, speed) {
      super(game, x, y, w, h, speed);
    }
    
    move() {
      document.onkeydown = (event) => {
        const key = event.keyCode;
        const possibleKeysStrokes = [37, 38, 39, 40];
        if (possibleKeysStrokes.includes(key)) {
          switch (key) {
            case 37: //left
              if (this.x >= 10) this.x -= this.speed;
              break;
            case 38: //up
              if (this.y >= 10) this.y -= this.speed;
              break;
            case 39: //right
              if (this.x <= 1230 - this.width) this.x += this.speed;
              break;
            case 40: //down
              if (this.y <= 790 - this.height) this.y += this.speed;
              break;
          }
        }
      };
    }
  
}