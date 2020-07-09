window.onload = () => {

  addElement = (el) => {

    //create a div container for the elemens of the screen
    let parent = document.getElementById('game-board');
    let divContainer = document.createElement('div');
    parent.appendChild(divContainer);
    divContainer.setAttribute('id', 'container'); //use for styling
    
    //create child and append it to the div
    let newChild = document.createElement(el);
    divContainer.appendChild(newChild);
    return divContainer.lastElementChild //the function returns the new element created
  };


  setAttributes = (el, attrs) =>{
      for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
    }


  removeScreen = () => {
      document.getElementById('game-board').innerHTML = '';
  };



  drawSplashScreen = () => {

    //heading
    addElement('h1').innerText = 'Croc saves Marshland';

    // Croc image + attributes
    let crocImg = addElement('img');
    setAttributes (crocImg, {'src': 'imges/frame-1.png', 'alt': 'croc-logo', 'class': 'logo-img'})

    //button
    let startbtn = addElement('button');
    startbtn.setAttribute('id', 'start-button');
    startbtn.innerText = 'Start Game';

    document.getElementById('start-button').onclick = () => {
        removeScreen ();
        drawGameScreen ();
        startGame();
    };

    //description
    addElement('p').innerText = 'Use the arrows to help Croc intercepting the monsters!';

    // Arrows image + attributes
    let ArrowsImg = addElement('img');
    setAttributes (ArrowsImg, {'src': 'imges/arrows.png', 'alt': 'arrows-logo', 'class': 'logo-img'})

  };
      


  drawGameScreen = () => { 

    //creates canvas
    let canvas = addElement('canvas');
    //sets attributes
    setAttributes (canvas, {'id': 'canvas', 'width': '1250px', 'height': '810px'});
  }



  drawGameOverScreen = () => {

      //headings
      addElement('h1').innerText = 'GAME OVER';
      addElement('h3').innerText = 'The monster army won this round!';

      // Croc image + attributes
      let crocImg = addElement('img');
      setAttributes (crocImg, {'src': 'imges/croc-faint.png', 'alt': 'croc-logo', 'class': 'logo-img'})

      //button
      let startbtn = addElement('button');
      startbtn.setAttribute('id', 'start-button');
      startbtn.innerText = 'Try again';
      document.getElementById('start-button').onclick = () => {
          removeScreen ();
          return drawSplashScreen();
      };
  }
      

  
  drawWinScreen = () => {

    //add headings
    addElement('h1').innerText = 'You are a hero!';
    addElement('h3').innerText = 'All the Marshs are safe and sound in the gingerbread house';

    //Croc image + attribute
    let crocWin =  addElement('img');
    setAttributes (crocWin, {'src': 'imges/croc-jump.png', 'alt': 'croc-logo', 'class': 'logo-img'})

    //button
    let playAgainbtn = addElement('button')
    playAgainbtn.setAttribute('id', 'start-button')
    playAgainbtn.innerText = 'Play Again';

    document.getElementById('start-button').onclick = () => {
        removeScreen ();
        return drawSplashScreen();
        };
  }



    //uncomment to test the screens
    // drawGameOverScreen()
    // drawWinScreen()

  //start the Game

  
  callGameOverScreen = () =>{
    removeScreen();
    return drawGameOverScreen();

  }

  callWinScreen = () =>{
    removeScreen();
    return drawWinScreen();
  }




  drawSplashScreen();

  startGame = () => {
    const myGame = new Game();
    myGame.init();
  }
};
  

