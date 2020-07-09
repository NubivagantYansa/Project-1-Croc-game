class Player extends Component {
    constructor(game, x, y, w, h) {
      super(game, x, y, w, h);
    }
    
    move() {
      document.onkeydown = (event) => {
        const key = event.keyCode;
        const possibleKeysStrokes = [37, 38, 39, 40];
        if (possibleKeysStrokes.includes(key)) {
          switch (key) {
            case 37: //left
              if (this.x >= 10) this.x -= 25;
              break;
            case 38: //up
              if (this.y >= 10) this.y -= 25;
              break;
            case 39: //right
              if (this.x <= 1240 - this.width) this.x += 25;
              break;
            case 40: //down
              if (this.y <= 795 - this.height) this.y += 25;
              break;
          }
        }
      };
    }

    // // helpers functions to get the four sides of the character
    // bottom() { return this.y + this.height;}
    // left () { return this.x; }
    // right () { return this.x + this.width; }
    // top () {return this.y;}


    // crashCollision(element) {
      
    //   //if any of those conditions are true there is no collision
    //   if (this.top() > element.y + element.height || this.right() < element.x || this.bottom() < element.y || this.left() > element.x + element.width){

    //     return false;

    //   }
      
    //   return true;
        
    // }
  
}