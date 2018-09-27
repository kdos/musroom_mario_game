(function (window, document, drawModule, getInputs, setCanvasSize, undefined) {
  setCanvasSize();
  getInputs();
  
  while(w>gameCanvas.width || h>gameCanvas.height){
    alert("Grid count is too high. Please re-enter");
    getInputs();
    if((tolerance--)<0){
      drawModule.error();
      alert("Too many attempts. SHUTTING DOWN");
      
      return;
    }
  }
  drawModule.init();
  document.onkeydown = function(event) {

        keyCode = window.event.keyCode; 
        keyCode = event.keyCode;

        switch(keyCode) {
        
        case 37: 
          if (direction != 'right') {
            direction = 'left';
          }
          console.log('left'); 
          break;

        case 39:
          if (direction != 'left') {
          direction = 'right';
          console.log('right');
          }
          break;

        case 38:
          if (direction != 'down') {
          direction = 'up';
          console.log('up');
          }
          break;

        case 40:
          if (direction != 'up') {
          direction = 'down';
          console.log('down');
          }
          break;
          }
      }


})(window, document, drawModule, getInputs, setCanvasSize);

      
