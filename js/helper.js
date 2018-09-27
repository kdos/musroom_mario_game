var setCanvasSize = function(){
	gameCanvas.width = window.innerWidth;
  gameCanvas.height = window.innerHeight;
}


var getInputs = function(){
	rows = prompt("Please enter rows", "Eg: 0");
  w = blockSize*rows;
  cols = prompt("Please enter columns", "Eg: 0");
  h = blockSize*cols;
  mushroomCount=rows;
}
