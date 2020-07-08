class House extends Component {
    constructor(game, x, y, w, h) {
      super(game, x, y, w, h);
    }
    
  // helpers functions to get the four sides of the character
  bottom() { return this.y + this.height;}
  left () { return this.x; }
  right () { return this.x + this.width; }
  top () {return this.y;}


  crashCollision(element) {
    
    //if any of those conditions are true there is no collision
    if (this.top() > element.y + element.height || this.right() < element.x || this.bottom() < element.y || this.left() > element.x + element.width){

      return false;

    }
    
    return true;
      
  }

}