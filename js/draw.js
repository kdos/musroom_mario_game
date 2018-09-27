var drawModule = (function () { 

  var marioBody = function(x, y, newX, newY) {
        ctx.fillStyle = MARIO_COLOUR;
        ctx.fillRect(newX*blockSize, newY*blockSize, blockSize, blockSize);
        ctx.strokeStyle = MARIO_BORDER_COLOUR;
        ctx.strokeRect(newX*blockSize, newY*blockSize, blockSize, blockSize);
        
        ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
        ctx.strokestyle = CANVAS_BORDER_COLOUR;
        ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
        ctx.strokeRect(x*blockSize, y*blockSize, blockSize, blockSize);
  }
  
  var clearBox = function(x, y){
        ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
        ctx.strokestyle = CANVAS_BORDER_COLOUR;
        ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
        ctx.strokeRect(x*blockSize, y*blockSize, blockSize, blockSize);
  }
  
  var makeMushroomBox = function(x,y){
        ctx.fillStyle = MUSHROOM_COLOUR;
        ctx.strokestyle = CANVAS_BORDER_COLOUR;
        ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);
        ctx.strokeRect(x*blockSize, y*blockSize, blockSize, blockSize);
  }
  
  var scoreText = function() {
    mushroomCountCard.innerHTML = "No of cells travelled by Mario: " + steps;
  }
    
  var paint = function(){
      steps++;

      var marioX = mario[0].x;
      var marioY = mario[0].y;

      if (direction == 'right') { 
        marioX++; }
      else if (direction == 'left') { 
        marioX--; }
      else if (direction == 'up') { 
        marioY--; 
      } else if(direction == 'down') { 
        marioY++; }

      if (marioX == -1 || marioX == w/blockSize || marioY == -1 || marioY == h/blockSize || checkCollision(marioX, marioY, mario)) {
          //restart game
          //btn.removeAttribute('disabled', true);
          if (direction == 'right') { 
           direction = 'left'; }
          else if (direction == 'left') { 
            direction = 'right'; }
          else if (direction == 'up') { 
            direction = 'down'; 
          } else if(direction == 'down') { 
            direction = 'up'; 
          }
          //ctx.clearRect(0,0,w,h);
          //gameloop = clearInterval(gameloop);
          return;          
        }
        
        for(var i=0;i<mushrooms.length;i++){
          if(marioX == mushrooms[i].x && marioY == mushrooms[i].y && !mushrooms[i].isEaten) {
            clearBox(mushrooms[i].x,mushrooms[i].y);
            mushrooms[i].isEaten=true;
            mushroomCount--;
            console.log(mushroomCount);
          }
        }
        
        if(mushroomCount==0){
          gameloop = clearInterval(gameloop);
          window.alert("Steps taken: "+steps);
        }
        marioBody(mario[0].x, mario[0].y,marioX,marioY);
        mario=[{x:marioX,y:marioY}];
        
        scoreText();
  }

  var makeMushrooms = function() {
  
      var marioX = mario[0].x;
      var marioY = mario[0].y;
      
      mushrooms = [];

     for (var i = mushroomCount - 1; i >= 0; i--) {
        var tempX = Math.floor((Math.random() * rows)),
        tempY = Math.floor((Math.random() * cols) );
        
        if (tempX===marioX && tempY === marioY) {
          tempX = Math.floor((Math.random() * rows) );
          tempY = Math.floor((Math.random() * cols) );
        }
        mushrooms.push({x:tempX,y:tempY,isEaten:false});
        makeMushroomBox(tempX,tempY);
      }
      
  }

  var drawGrid = function(argument) {
        for (var i = w-blockSize; i >= 0; i-=blockSize) {
          for (var j = h-blockSize; j >= 0; j-=blockSize) {
            ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
            ctx.strokestyle = CANVAS_BORDER_COLOUR;
            ctx.fillRect(i, j, blockSize, blockSize);
            ctx.strokeRect(i, j, blockSize, blockSize);
          }
        }
  }
  
  var drawFace = function(){
    let face = [
      {x:21,y:15},
      {x:29,y:15},
      {x:20,y:25},
      {x:21,y:24},
      {x:22,y:23},
      {x:23,y:22},
      {x:24,y:21},
      {x:25,y:21},
      {x:26,y:21},
      {x:27,y:22},
      {x:28,y:23},
      {x:29,y:24},
      {x:30,y:25}
    ];
    
    for(var i=0;i<face.length;i++){
      makeMushroomBox(face[i].x,face[i].y);
    }
  };

  var checkCollision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      } 
      return false;
  }

  var init = function(){
      direction = 'left';
      drawGrid();
      mario = [{x:0,y:0}];  
      makeMushrooms();
      gameloop = setInterval(paint, 200);
  }


    return {
      init : init,
      error : drawFace
    };

    
}());
