# Croc saves Marshland

## Description

Croc saves Marshland is a game where the player has to move Croc to stop the monsters from colliding with the hairy marshmallows. The speed increases in the last 20 seconds for higher difficulty. The game lasts 1 minute. To win, 10 marshmellows must reach the gingerbread house. Extra points are added when collecting white candies.

## MVP (DOM - CANVAS)
- Croc starts from the middle of the canvas and uses the arrow keys to move horizontally/vertically.
- Random monsters come from the right side of the screen and disappear when they reach the left side.
- Random marshmallows come from the bottom-left side of the screen and move to the top side.
- If a monster collides with a marshmallow, the game ends.
- If no marshmallows are killed you win.
- If marshmallows reach the house in the top-left side of the screen, they disappear.

## Backlog
- Timer (seconds).
- Animated Sprites for all characters
- Multiple enemies
- Bonus items randomly appearing to slow down the speed
- Smooter movements
- Badges

## Data structure
### main.js
```
removeScreen (){} 
drawSplashScreen(){}
drawGameScreen(){}
drawGameOverScreen(){}
drawWinScreen(){}
```
game.js
```
game () {
- constructor()
- init() //initiate canvas
- animate () //game loop
- drawPlayer () / drawHouse () /drawBackground ()
- createMonsters() / createMarsh() / createBonus()
- clear()
- addChacters () / addBonus ()
- detectCollision()
- monsterPlayerCollisionCheck() / monsterMarshCollisionCheck () /  marshHouseCollisionCheck () / playerBonusCollisionCheck ()
- updateScoreBoard ()
- changeGameSpeed()
- checkGameIsOver()
- didYouWin ()
- gameOver ()
- gameWin ()
}
```
component.js
```
component{
- constructor()
- update ()
- drawComponent()
}
```
player.js
```
player extends Component(){
- constructor () {}
- move ()
}
```
monsters.js
```
Monster extends Component(){
- constructor()
- draw()
- move ()
}
```
marshmallows.js
```
Marsh extends Component(){
- constructor()
- draw()
- move ()
}
```
bonus.js
```
Bonus extends Component(){
- constructor()
- draw()
- move ()
}
```
gingerbHouse.js
```
house extends Component ()
```

## States e States Transitions
Definition of the different states and their transition (transition functions)
```

startGame()
- drawGameScreen()
- game.init()
- game.start()
  
callGameOver()
- drawGameOverScreen()

CallWonGame()
- drawWinScreen()

```
## Tasks
```
main - drawSplashScreen(){addeventListener}
main - removeScreen (){}
main - drawSplashScreen(){}
main - drawGameScreen(){}
main - drawGameOverScreen(){}
main - drawWinScreen(){}
game - constructor()
game - init()
game - animate ()
game - drawPlayer ()
game - createMonsters()
game - createMarsh()
game - drawHouse ()
game - clear()
game - drawBackground ()
game - addChacters ()
game - detectCollision()
game - monsterCollisionCheck()
game - marshHouseCollisionCheck()
game - updateScore ()
game - checkGameIsOver()
game - gameOver ()
game - gameWin ()
```
## Links

### Trello
[Trello] https://trello.com/b/Onyb4FWR/project-1-croc-game

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/NubivagantYansa/Project-1-Croc-game)
[Link Deploy](http://github.com)

### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)

### Credits
*Credit sprites: bevouliin ( https://bevouliin.com/ )