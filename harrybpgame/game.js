/*
* Game by Harry BP
*/
map = null;
function draw(){
  if(paused)
    return;
  //Clear canvas
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

  //Draw player
  //Bow if facing left
  if(faceDirection == -1){
    ctx.strokeStyle = "#725f35";
    ctx.lineWidth=gridDimension/8;
    ctx.beginPath();
    ctx.moveTo(playerPosX + playerWidth/4, playerPosY + playerWidth - playerWidth/4);
    ctx.bezierCurveTo(playerPosX - playerWidth/2,playerPosY + playerWidth - playerWidth/4,playerPosX - playerWidth/2,playerPosY + playerWidth + playerWidth/2 + playerWidth/2,playerPosX + playerWidth/4, playerPosY + playerWidth + playerWidth/2 + playerWidth/2);
    ctx.stroke();
  }
  //Body
  ctx.fillStyle = "#849dbc";
  ctx.fillRect(playerPosX, playerPosY, playerWidth, playerHeight);
  //Head
  ctx.fillStyle = "#f9e1c2";
  ctx.fillRect(playerPosX, playerPosY, playerWidth, playerWidth);
  //Arm
  ctx.fillStyle = "#6067a5";
  ctx.fillRect(playerPosX + (gridDimension/3), playerPosY + gridDimension, gridDimension/3, gridDimension);
  //Hair
  ctx.fillStyle = "#9ea05e";
  ctx.beginPath();
  ctx.moveTo(playerPosX, playerPosY);
  ctx.lineTo(playerPosX + playerWidth, playerPosY);
  if(faceDirection == 1){
    ctx.lineTo(playerPosX + playerWidth, playerPosY + playerWidth/4);
    ctx.lineTo(playerPosX + playerWidth/2, playerPosY + playerWidth/4);
    ctx.lineTo(playerPosX, playerPosY + (3*playerWidth)/4);
  } else {
    ctx.lineTo(playerPosX + playerWidth, playerPosY + (3*playerWidth)/4);
    ctx.lineTo(playerPosX + playerWidth/2, playerPosY + playerWidth/4);
    ctx.lineTo(playerPosX, playerPosY + playerWidth/4);
  }
  ctx.closePath();
  ctx.fill();
 
  //Bow if facing right
  if(faceDirection == 1){
    ctx.strokeStyle = "#87703f";
    ctx.lineWidth=gridDimension/8;
    ctx.beginPath();
    ctx.moveTo(playerPosX + 3*playerWidth/4, playerPosY + playerWidth - playerWidth/4);
    ctx.bezierCurveTo(playerPosX + playerWidth*1.5,playerPosY + playerWidth - playerWidth/4,playerPosX + playerWidth*1.5,playerPosY + playerWidth + playerWidth/2 + playerWidth/2,playerPosX + 3*playerWidth/4, playerPosY + playerWidth + playerWidth/2 + playerWidth/2);
    ctx.stroke();
    ctx.strokeStyle = "black";
    ctx.lineWidth = gridDimension/16;
    ctx.beginPath();
    ctx.moveTo(playerPosX + 3*playerWidth/4, playerPosY + playerWidth - playerWidth/4);
    ctx.lineTo(playerPosX + playerWidth/2, playerPosY + playerWidth + playerWidth/2);
    ctx.lineTo(playerPosX + 3*playerWidth/4, playerPosY + playerWidth + playerWidth/2 + playerWidth/2);
    ctx.stroke();
  } 
  
  for(x = 0; x < tileCount; x++){
    if(tiles[x].left + gridDimension < 0 || tiles[x].left > gameSize || tiles[x].top + gridDimension < 0 || tiles[x].top > gameSize)
      continue;

    //Draw creatures
    if(tiles[x].isCreature){
      var z = gridDimension/8;
      var y = gridDimension/12;
      if(creatures[tiles[x].id].direction == 1){
        z = gridDimension - gridDimension/8 - gridDimension/3;
        y = gridDimension/3  - gridDimension/8 - gridDimension/12;
      }
      //Body
      ctx.fillStyle = "rgb(" + (255 - (30*creatures[tiles[x].id].health)) + ",142,61)";
      ctx.fillRect(tiles[x].left, tiles[x].top, gridDimension, tiles[x].height);
      //Head
      ctx.fillStyle = "#73ba60";
      ctx.fillRect(tiles[x].left, tiles[x].top, gridDimension, gridDimension);
      //Arm
      ctx.fillStyle =  "#7fba6f";
      ctx.fillRect(tiles[x].left + (gridDimension/3), tiles[x].top + gridDimension, gridDimension/3, 2*gridDimension/3);
      //Eye
      ctx.fillStyle = "white";
      ctx.fillRect(tiles[x].left + z, tiles[x].top + gridDimension/3, gridDimension/3, gridDimension/3);
      //Eyeball
      ctx.fillStyle = "black";
      ctx.fillRect(tiles[x].left + z + y, tiles[x].top + gridDimension/3 + gridDimension/12, gridDimension/8, gridDimension/8);
    }
    //Draw arrows
    if(tiles[x].isArrow){
      ctx.fillStyle = "#9b7d58";
      if(faceDirection == 1){
        ctx.fillRect(tiles[x].left,tiles[x].top,gridDimension - ((2*gridDimension)/8),tiles[x].height);
        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.moveTo(tiles[x].left + gridDimension, tiles[x].top + (tiles[x].height/2));
        ctx.lineTo(tiles[x].left + ((6/8)*gridDimension), (tiles[x].top - (gridDimension/8)));
        ctx.lineTo(tiles[x].left + ((6/8)*gridDimension), tiles[x].top + tiles[x].height+ (gridDimension/8));
      } else {
        ctx.fillRect(tiles[x].left + ((2*gridDimension)/8), tiles[x].top,gridDimension - ((2*gridDimension)/8),tiles[x].height);
        ctx.fillStyle = "gray";
        ctx.beginPath();
        ctx.moveTo(tiles[x].left, tiles[x].top + (tiles[x].height/2));
        ctx.lineTo(tiles[x].left + ((2/8)*gridDimension), (tiles[x].top - (gridDimension/8)));
        ctx.lineTo(tiles[x].left + ((2/8)*gridDimension), tiles[x].top + tiles[x].height+ (gridDimension/8));
      }
      ctx.closePath();
      ctx.fill();
    }
  }
  ctx.fillStyle = "#ff670f";
  ctx.fillRect(0, gameSize-(yPosition) + (7*gridDimension) + gridDimension/4 , gameSize, gameSize);
  for(x = 0; x < tileCount; x++){
    if(tiles[x].left + gridDimension < 0 || tiles[x].left > gameSize || tiles[x].top + gridDimension < 0 || tiles[x].top > gameSize)
      continue;

    if(!tiles[x].isArrow && !tiles[x].isCreature){

      //Draw tiles
      ctx.fillStyle = tiles[x].color;
      if(tiles[x].left + gridDimension > gameSize){
        var width = gameSize - tiles[x].left;
      } else {
        var width = gridDimension;
      }
      if(tiles[x].top + gridDimension > gameSize){
        var height = gameSize - tiles[x].top;
      } else {
        var height = tiles[x].height;
      }
      ctx.fillRect(tiles[x].left,tiles[x].top,width,height);
    }
  }

  //Draw health
  ctx.fillStyle = "red";
  var hp= health;
  var pos = gridDimension;
  while(hp > 0){
    if(hp > 20){
      ctx.fillRect(pos, gameSize - (2*gridDimension), gridDimension, gridDimension);
    } else {
      ctx.fillRect(pos, gameSize - (2*gridDimension), ((hp/20)*gridDimension), gridDimension);
    }
    pos += 2*gridDimension;
    hp -= 20;
  }  
  
  //Write score
  ctx.font= ((10/128)*gameSize) +"px Arial Black";
  ctx.fillStyle = "white";
  ctx.fillText(score, gridDimension, 2*gridDimension, 2*gridDimension);

  
}

//--------------------------------------------------------------------------
//Global Game properties

//Sizing
var wWidth = window.innerWidth;
var wHeight = window.innerHeight;
var gridSize = 16;
var gameSize, gridDimension;

//Player
var jumpSpeed, playerPosX, playerPosY, playerSpeed, startX, startY, playerWidth, playerHeight;

//Other
var xDeleteDist = 2;
var yDeleteDist = 6;
var renderDist = 5;
var frameLength = 30;
var damageTimeout = 25;
var arrowSpeed, arrowHeight, gravity, ctx, canvas;

//Creatures
var creatureJumpSpeed, creatureSpeed;
var creatureHealth = 4;
var creatureAbudance = 3; //One in x

//--------------------------------------------------------------------------
//Calculate all element sizes from game size
//128/256/384/512/
function calculateSize(x){
  gameSize = parseInt(x);
  playerWidth = gameSize/16;
  playerHeight = (playerWidth*2.5);
  gravity = gameSize/128;
  jumpSpeed = gameSize/16;
  creatureJumpSpeed = gameSize/24;
  gridDimension = parseInt(gameSize/gridSize);
  playerPosX = gameSize/2;
  playerPosY = gameSize/2;
  playerSpeed = gameSize/64;
  creatureSpeed = gameSize/128;
  startX = gameSize/4;
  startY = gameSize/2;
  arrowSpeed = gravity*4;
  arrowHeight = gameSize/64;
}

//--------------------------------------------------------------------------
//Game state
//Arrays
var creatures, tiles;
//Counts
var tileCount, arrowCount, creatureCount, activeCreatureCount;
//Player state
var xSpeed, crouched, faceDirection, health, dead, maxCol, score, damageTime, jumpCount, gravSpeed, paused;
//Position
var xPosition , xPositionOffset, yPosition, yPositionOffset, col, rowNo;
//Stats
var maxLen;

var circleYCenter;
var creatureSpawns;
var distCount;
var chunksGenerated;
var lastRadius;
//--------------------------------------------------------------------------
//Object constructors
function tileObj(left, top, height, isArrow, direction, isCreature, id, color){
  this.left = left;
  this.top = top;
  this.height = height;
  this.isArrow = isArrow;
  this.direction = direction;
  this.isCreature = isCreature;
  this.id = id;
  this.color = color;
}

function creature(cGravSpeed, health, frozen, direction){
  this.cGravSpeed = cGravSpeed;
  this.health = health;
  this.frozen = frozen;
  this.direction = direction;
}

//--------------------------------------------------------------------------
//On load
window.onload = function(){
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("size");
  if(c == null){
    c = 3;
  }
  init(parseInt(c*128));
}

//--------------------------------------------------------------------------
//Calls update Frame repeatedly
var start = null;
window.requestAnimationFrame(step);
function step(timestamp){
  if(!start) start = timestamp;
  var progress = timestamp - start;
  if(progress > frameLength){
    start = timestamp;
    if(!paused){
      updateFrame();
    }
  }
  window.requestAnimationFrame(step);
}

//--------------------------------------------------------------------------
//Called at regular intervals to update positions of everything on screen
function updateFrame(){
  var start = performance.now();
  //Move objects
  if(arrowCount > 0){
    moveArrows();
  }
  if(activeCreatureCount > 0){
    moveCreatures();
  }
  yAccelerate();
  panMap();
  loadTiles();

  //Generate new chunks
  if(maxCol%50 == 20 && maxCol != distCount){
    var type = Math.floor(Math.random() * 2)+1;
    console.log(type);
    genMap(0,type);
    chunksGenerated++;
    renderCreatures(50*chunksGenerated);
    distCount = maxCol;
  }
  if(col > maxCol){
    maxCol = col;
    score++;
  }
  if(rowNo > 12){
    loseHealth(5);
    if(rowNo > 17){
      die();
    }
  }
  draw();
  //Stats
  var end = (performance.now() - start);
  if(end > maxLen){
    maxLen = end;
  }
  document.getElementById("info").textContent = end.toFixed(2) + " : " + maxLen.toFixed(2);
}

//--------------------------------------------------------------------------
//Initialise game state, create all elements
function init(size){
  paused = true;
  calculateSize(size);
  // Create the canvas
  if(canvas != null){
    canvas.parentNode.removeChild(canvas);
  }
  canvas = document.createElement("canvas");
  
  ctx = canvas.getContext("2d");
  canvas.width = gameSize;
  canvas.height = gameSize;
  canvas.style.cssText += "display:block; border: 2px solid white; margin: auto; width: " + gameSize + "px; height: " + gameSize + "px;";
  document.body.insertBefore(canvas, document.body.firstChild);

  //Reset variables
  gravSpeed = score = damageTime = maxCol = jumpCount = xSpeed = xPosition = xPositionOffset = yPosition = yPositionOffset = col = maxLen = rowNo = arrowCount = creatureCount = activeCreatureCount =tileCount = distCount = chunksGenerated = lastRadius = 0;
  
  crouched = false;
  faceDirection = 1;
  creatures = [];
  tiles = [];
  health = 100;
  dead = false;

  //Place player
  xPosition = startX;
  yPosition = startY;
  xPositionOffset = xPosition % gridDimension;
  yPositionOffset = yPosition % gridDimension;
  col = Math.floor(xPosition/gridDimension);
  rowNo = Math.floor(yPosition/gridDimension);

  //Generate map and load tiles
  circleYCenter = 16;
  creatureSpawns = 0;
  genMap(14,1);
  renderCreatures(0); 
  for(x = -1; x < gridSize + 1; x++){
    loadCol(x+col,x*gridDimension);
  }
  paused = false;
}

//--------------------------------------------------------------------------
//Randomly generate map
function genMap(start, type){
  //type = 2;
  var length = 50;
  var height = 30;
  var leeway = 7;
  if(type == 1){
    leeway = 8;
  }
  var minRadius = 3;

  //Initialise arrays
  var newChunk = [];
  for(i = 0; i < height; i++){
    newChunk.push([])
  }
  for(i = 0; i < height; i++){
    for(j = 0; j < length; j++){
      newChunk[i][j] = type;
    }
  }

  //Generate
  for(circleXCenterCurrent = start; circleXCenterCurrent < length; circleXCenterCurrent+= 2){
    if(circleYCenter < minRadius + leeway){
      change = 3;
    } else if(circleYCenter > (height-minRadius-leeway)){
      change = -3;
    } else {
      var change = 2 - Math.floor(Math.random() * (3 - 1 + 1) + 1);
    }
    
    //console.log(change);
    circleYCenter += change;
    if(circleYCenter < minRadius + leeway){
      circleYCenter = minRadius + leeway;
    } else if(circleYCenter > (height-minRadius-leeway)){
      circleYCenter = (height-minRadius-leeway);
    }
    var cTop = circleYCenter - leeway;
    var cBottom = height - leeway - circleYCenter;
    var maxRadius = Math.min(cTop, cBottom);
    var isCreature = Math.floor(Math.random() * (creatureAbudance - 1 + 1) + 1);
    if(circleXCenterCurrent == 0){
      radius = lastRadius;
    } else {
      var radius = Math.floor(Math.random() * (maxRadius - minRadius + 1) + minRadius);
    }
    //console.log(circleYCenter);
    for(i = 0; i < height; i++){
      for(j = 0; j < length; j++){
        var  x = Math.sqrt(Math.pow(Math.abs(circleYCenter-i),2) + Math.pow(Math.abs(circleXCenterCurrent-j),2));
        if(x< radius){
          newChunk[i][j] = 0;
        }
      }
    }
    if(isCreature == 1 && (start == 0 || circleXCenterCurrent > 25)){
      console.log("c");
      newChunk[circleYCenter+radius][circleXCenterCurrent] = 5;
      
    }
    if(circleXCenterCurrent == length-2)
      lastRadius = radius;
  }
  
  //Generate craters
  if(type == 2){
    var lastCrater = -5;
    //Loop along length
    for(j = 0; j < length; j++){
      var isCrater = Math.floor(Math.random() * (25 - 1 + 1) + 1);
      
      //New crater
      if(isCrater == 5 && j > lastCrater +5){
        lastCrater = j;
        circleX = j;
        console.log("C");
        var land = false;
        //Loop down height
        for(i = 0; i < height; i++){
          if(newChunk[i][j] == 0){
            land = true;
          }
          //Reach floor
          if(land && newChunk[i][j] == 2){
            //Cut circles
            circleY = i;
            var rad = Math.floor(Math.random() * (3 - 1 + 1) + 1);
            for(p = i-4; p < i+4 && p < height; p++){
              for(q = j-4; q < j+4; q++){
                var  x = Math.sqrt(Math.pow(Math.abs(circleY-p),2) + Math.pow(Math.abs(circleX-q),2));
                if(x< rad){
                  newChunk[p][q] = 0;
                }
              }
            }
          }
        }
      }
    }
  }

  if(map == null){
    map = newChunk;
  } else{
    for(i = 0; i < height; i++){
      for(j = 0; j < length; j++){
        map[i].push(newChunk[i][j]);
      } 
    }
  }

}

//--------------------------------------------------------------------------
//Take 'amount' of health off total and update health display
function loseHealth(amount){
  var time = new Date;
  if(time - damageTime < damageTimeout){
    return;
  }
  damageTime = time;
  health -= amount;
  if(health < 1){
    die();
  } 
}

//--------------------------------------------------------------------------
//Stop game, display game over message
function die(){
  dead = true;
  paused = true;
  ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  //Write score
  ctx.font= ((10/32)*gameSize) +"px Arial Black";
  console.log((10/32)*gameSize);
  ctx.fillStyle = "white";
  ctx.fillText("Game over", gridDimension*2, 5*gridDimension, 12*gridDimension);
  ctx.fillText("Score: " + score, gridDimension*2, 12*gridDimension, 12*gridDimension);
}

//--------------------------------------------------------------------------
//Calculate which tiles need to be loaded into array
function loadTiles(){
  col = Math.floor(xPosition/gridDimension);
  rowNo = Math.floor(yPosition/gridDimension);
  while(xPositionOffset > gridDimension){
    xPositionOffset-=gridDimension;
    loadCol(col+gridSize, gameSize-xPositionOffset);
  }
  while(xPositionOffset < -gridDimension){
    xPositionOffset+=gridDimension;
    loadCol(col-1, -gridDimension - (xPositionOffset%gridDimension));
  }
  while(yPositionOffset > gridDimension){
      var test = Math.floor(yPositionOffset/gridDimension)-1;
      yPositionOffset-=gridDimension;
      loadRow(rowNo+gridSize-test, gameSize-yPositionOffset);
    }
  while(yPositionOffset < -gridDimension){
    var test = Math.floor(-yPositionOffset/gridDimension)-1;
    yPositionOffset+=gridDimension;
    loadRow(rowNo-test, -gridDimension-(yPositionOffset%gridDimension));
  }
}

//--------------------------------------------------------------------------
//Calculates left positioning of all elements based on player x axis movement
function panMap(){
    var moveAmount = null;
    //Check each tile
    for(i = 0; i < tileCount; i++){
      var pLeftOriginal = tiles[i].left;
      var pTop = tiles[i].top;
      var newPLeft = pLeftOriginal + xSpeed;

      //Check for clash with player
      if(!tiles[i].isCreature && !tiles[i].isArrow && newPLeft < playerPosX + playerWidth && newPLeft + gridDimension > playerPosX && playerPosY + playerHeight > pTop && playerPosY < pTop + tiles[i].height){
        if(xSpeed < 0){
          newPLeft = playerPosX + playerWidth;
        } else {
          newPLeft = playerPosX - gridDimension;
        }
      } 

      //Get minimum move amount
      if(moveAmount == null || (xSpeed < 0 && newPLeft - pLeftOriginal > moveAmount) || (xSpeed > 0 && newPLeft - pLeftOriginal < moveAmount)){
        moveAmount = newPLeft - pLeftOriginal;
      }
    }

  if(moveAmount != 0){
    //Update tiles left values
    for(i = 0; i < tileCount; i++){
      tiles[i].left += moveAmount;
      if(tiles[i].isCreature && creatures[tiles[i].id].frozen && tiles[i].left > 0 && tiles[i].left < gameSize){ //Unfreeze creatures coming into view
        creatures[tiles[i].id].frozen = false;
        activeCreatureCount++;
      }
    }
    if(tileCount > 100){
      deleteTiles();
    }
  }
  
  if(tileCount < 1){//If not tiles then no clash possible
    moveAmount = xSpeed;
  }
  
  //Render new rows and columns about to come into view
  xPosition-= moveAmount;
  xPositionOffset -= moveAmount;
}

//--------------------------------------------------------------------------
//Calculates top positioning of all elements on screen based on player y axis movement
function yAccelerate(){
  gravSpeed+=gravity;
  var moveAmount = null;

  //Check each tile
  for(i = 0; i < tileCount; i++){
    var pLeft = tiles[i].left;
    var pTopOriginal = tiles[i].top;
    var newPTop = pTopOriginal - gravSpeed;

    //Check for clash with player
    if(!tiles[i].isCreature && !tiles[i].isArrow && pLeft < playerPosX + playerWidth && pLeft + gridDimension > playerPosX && playerPosY + playerHeight > newPTop && playerPosY < newPTop + tiles[i].height){
        if(gravSpeed > 0){//player falling
          var newPTop = playerPosY + playerHeight;
        } else if(gravSpeed < 0){//Player jumping
          var newPTop = playerPosY - tiles[i].height;
        }
      }
      //Find minimum move amount possible
      if(moveAmount== null || (gravSpeed > 0 && newPTop - pTopOriginal > moveAmount) || (gravSpeed < 0 && newPTop - pTopOriginal < moveAmount) ){
        moveAmount = newPTop - pTopOriginal;
      }
    }
    if(tileCount < 1){ //If no tiles can be no clashes
      moveAmount = -gravSpeed;
    }
    if(moveAmount != -gravSpeed){//Clash has occured
      if(gravSpeed > 0){
        jumpCount = 0;
      }
      gravSpeed = 0;
    }
    if(moveAmount != 0){//Move tiles
      for(i = 0; i < tileCount; i++){
        tiles[i].top += moveAmount;
      }
    }
   
    yPosition-=moveAmount;
    yPositionOffset-=moveAmount;
  
}

//--------------------------------------------------------------------------
//Captures key presses

var keyLeft = 83, keyRight = 68, keyPause = 80, keyUp = 76, keyDown = 88, keyShoot = 75;

window.onkeydown = function(e) {

  

    var key = e.keyCode ? e.keyCode : e.which;
    if(key == keyUp){
      if(!crouched){
        
        if(jumpCount < 2){
          if(jumpCount < 1){//Jump
            gravSpeed = -jumpSpeed;
          } else {//Double jump
            gravSpeed = -jumpSpeed+2;
          }
          jumpCount ++;
        }
      } 
    }
    if (key == keyRight) {
      xSpeed = -playerSpeed; //-->Right
      faceDirection = 1;
    }else if (key == keyLeft) {
      xSpeed = playerSpeed; //<--Left
      faceDirection = -1;
    }
    if(key == keyDown && !crouched){//Down\/
      playerHeight -= playerWidth;
      playerPosY+=playerWidth;
      crouched = true;
    }
    if(key == keyPause){//(P)ause
      console.log(rowNo);
      if(!dead){
        paused = !paused;
        if(paused){
          ctx.fillStyle = "white";
          ctx.fillRect(3*gridDimension, 3*gridDimension, 3*gridDimension, 10*gridDimension);
          ctx.fillRect(10*gridDimension, 3*gridDimension, 3*gridDimension, 10*gridDimension);
        }
      } else {
        init(gameSize);
      }
    }
  }

//--------------------------------------------------------------------------
//Captures key releases
window.onkeyup = function(e) {
  var key = e.keyCode ? e.keyCode : e.which;
  if(key == keyLeft || key == keyRight){//Left & Right release
    xSpeed = 0;
  }
  if(key == keyDown){//Down release
    playerHeight += playerWidth;
    playerPosY -= playerWidth;
    crouched = false;
  }
  if(key == keyShoot){//(S)hoot
      shoot();
    }
}

//--------------------------------------------------------------------------
//Creates a new div element and adds it to the game container (and tile array)
function createTile(width, height, xOffset, yOffset, type){
  var rand = Math.floor(Math.random() * 3);
  if(type == 1){
    var bgColor = "#666666";
    if(rand == 0){
      bgColor = "#727272";
    } else if(rand == 1){
      bgColor = "#5e5e5e";
    }  
  } else if(type ==2){
    var bgColor = "#7f3535";
    if(rand == 0){
      bgColor = "#632b2b";
    } else if(rand == 1){
      bgColor = "#701f1f";
    }  
  }
  tiles[tileCount] = new tileObj(xOffset, yOffset, height, false, 0, false, 0, bgColor);
  tileCount++;
  
}

//--------------------------------------------------------------------------
//Loads a new column to the left or right of whats visibile
function loadCol(number, position){
  for(i = -(renderDist-1); i < gridSize+renderDist; i++){
    if(number >= 0 && number < map[0].length && i+rowNo < map.length && i+rowNo >= 0 && map[i+rowNo][number] != 0 && map[i+rowNo][number] < 5){
      createTile(gridDimension, gridDimension, position, (i+rowNo)*gridDimension-yPosition, map[i+rowNo][number]);
    }
  }
}

//--------------------------------------------------------------------------
//Loads a new row above or below whats visible
function loadRow(number, position){
  if(number < map.length && number >= 0){
    var row = map[number];
    for(i = -(renderDist-1); i < gridSize+renderDist; i++){
      if(i+col < row.length && i+col >= 0 && row[i+col] != 0 && row[i+col] < 5){
        createTile(gridDimension, gridDimension, (i+col)*gridDimension-xPosition, position, row[i+col]); 
      }
    }
  } 
}

//--------------------------------------------------------------------------
//Scans the map for creatures, creates them and adds them to creatures and tile array
function renderCreatures(start){
  var x = 0;
  for(j = 0; j < map.length; j++){
    for(i = start; i < map[j].length; i++){
      if(map[j][i] >= 5){
        var xOffset = ((i*gridDimension)-xPosition);
        var yOffset = (((j-1)*gridDimension)-yPosition);
        tiles[tileCount] = new tileObj(xOffset, yOffset, 2*gridDimension, false, 0, true, creatureSpawns, "#000000");
        tileCount++;
        creatures[creatureSpawns]= new creature(0, creatureHealth, true, -1);
        creatureCount++;
        creatureSpawns++;
      }
    }
  }
}

//--------------------------------------------------------------------------
//Calculates next top and left position of all non frozen creatures
function moveCreatures(){
  for(i = 0; i < tileCount; i++){
    if(!tiles[i].isCreature || creatures[tiles[i].id].frozen ){
      continue;
    }
    var intendsToJump = false;
    var jumpConfirmed = false;
    var move = creatures[tiles[i].id].direction * creatureSpeed;

    //Calculate direction
    if(tiles[i].left < playerPosX){
      if(creatures[tiles[i].id].direction != 1){
        creatures[tiles[i].id].direction = 1;
      }
    } else {
      if(creatures[tiles[i].id].direction != -1){
        creatures[tiles[i].id].direction = -1;
      }
    }
    var creature = tiles[i];
    var newLeft = tiles[i].left + move;
    for(j = 0; j < tileCount; j++){
      if(tiles[j].isArrow || i == j || (tiles[j].isCreature && creatures[tiles[j].id].frozen)){
        continue;
      }
      var block = tiles[j];

      //Check for clashes
      if(newLeft < block.left + gridDimension && newLeft + gridDimension > block.left && creature.top + (2*gridDimension) > block.top && creature.top < block.top + gridDimension){
        intendsToJump = true;
        if(move > 0){ //-->
          var newLeftT = block.left - gridDimension;
          if(newLeftT < newLeft){
            newLeft = newLeftT;
          }
        } else {//<--
          var newLeftT = block.left + gridDimension;
          if(newLeftT > newLeft){
            newLeft = newLeftT;
          }
        }
      }
    }
    if(newLeft < playerPosX + playerWidth && newLeft + gridDimension > playerPosX && creature.top + (2*gridDimension) > playerPosY && creature.top < playerPosY + playerHeight){
      if(move > 0){
        var newLeftT = playerPosX - gridDimension;
        if(newLeftT < newLeft){
          newLeft = newLeftT;
        }
      }else {
        var newLeftT = playerPosX + playerWidth;
        if(newLeftT > newLeft){
          newLeft = newLeftT;
        }
      }
      loseHealth(2);
    }
    creature.left = newLeft;

    creatures[creature.id].cGravSpeed += gravity;
    var newTop = creature.top + creatures[creature.id].cGravSpeed;

    for(j = 0; j < tileCount; j++){
      if(tiles[j].isArrow || tiles[j].isCreature){
        continue;
      }
      var block = tiles[j];
      //Check for clashes
      if(creature.left < block.left + gridDimension && creature.left + gridDimension > block.left && newTop + creature.height > block.top && newTop < block.top + gridDimension){         
        if(creatures[creature.id].cGravSpeed > 0){//creature falling
          var newTopT = block.top - (gridDimension*2);
          if(newTopT < newTop){
            newTop = newTopT;
          }
          if(intendsToJump){
            jumpConfirmed = true;
          }
        } else if(creatures[creature.id].cGravSpeed < 0){
          var newTopT = block.top + gridDimension;
          if(newTopT > newTop){
            newTop = newTopT;
          }
        }
      } 
    }

    if(newTop != creature.top + creatures[creature.id].cGravSpeed){
      creatures[creature.id].cGravSpeed = 0;
    }
    if(jumpConfirmed){
      creatures[creature.id].cGravSpeed = -creatureJumpSpeed;
    }
    creature.top = newTop;
  }
}

//--------------------------------------------------------------------------
//Removes all tiles outside the delete distance from the container and tile array
function deleteTiles(){
  for(i= 0; i < tileCount; i++){
    if(tiles[i].isArrow){
      continue;
    }
    if(tiles[i].left < -(xDeleteDist*gridDimension)||  tiles[i].left > gameSize + ((xDeleteDist-1)*gridDimension) || tiles[i].top < -(yDeleteDist*gridDimension) || tiles[i].top > gameSize + ((yDeleteDist-1)*gridDimension)){
      if(tiles[i].isCreature){ //Freeze creature
        if(!creatures[tiles[i].id].frozen && creatures[tiles[i].id].health > 0){
          creatures[tiles[i].id].frozen = true;
          activeCreatureCount--;
        }
      } else { //Unload tile
        tiles.splice(i,1);
        tileCount--;
      }
    }
  }
}

//--------------------------------------------------------------------------
//Creates new arrow element
function shoot(){
  var left = playerPosX + (faceDirection*playerWidth) + playerWidth;
  if(faceDirection == 1){
    left -= 2*playerWidth;
  }
  tiles[tileCount] = new tileObj(left, playerPosY + playerWidth + playerWidth/4, arrowHeight, true, faceDirection, false, 0, "#000000");
  tileCount++;
  arrowCount++;
}

//--------------------------------------------------------------------------
//Calculates next x position of all arrows, and checks if they hit a wall or creature
function moveArrows(){
  for(i = 0; i < tileCount; i++){
    if(!tiles[i].isArrow){
      continue;
    }
    tiles[i].left += (arrowSpeed*tiles[i].direction);
    var clash = false;
    for(j = 0; j < tileCount; j++){
      //Check for clashes
      if(!tiles[j].isArrow && tiles[j].top < tiles[i].top + arrowHeight && tiles[j].top+tiles[j].height > tiles[i].top && tiles[j].left < tiles[i].left + gridDimension && tiles[j].left + gridDimension > tiles[i].left){
        clash = true;
        //Do damage to creatures
        if(tiles[j].isCreature && !creatures[tiles[j].id].frozen &&creatures[tiles[j].id].health > 0){
          creatures[tiles[j].id].health -= 1;
          //Kill creature
          if(creatures[tiles[j].id].health < 1){
            tiles.splice(j, 1);
            tileCount--;
            i--;
            activeCreatureCount--;
            creatureCount--;
            score += 25;
            break;
          }
        }
      }
    }
    //Remove arrows that hit someting or are too far off screen
    if(clash || tiles[i].left > gameSize*2 || tiles[i].left < -(gameSize*2)){
      tiles.splice(i, 1);
      arrowCount--;
      tileCount--;
    } 
  }
}