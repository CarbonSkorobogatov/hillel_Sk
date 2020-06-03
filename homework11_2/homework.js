window.onload = function(){
  var block = document.querySelector('.img');
  var shift = false;

  step = 10;
  z = 0;
    document.onkeydown = function(event){

      if(!inWindow(block)){
        return;
      }

    switch(event.keyCode){
      case 37:
        if(shift == false){
          block.style.left = block.offsetLeft - step + 'px';
        }else{
          block.style.left = block.offsetLeft - step/2 + 'px';
        }
        break;

      case 39:
        if(shift == false){
          block.style.left = block.offsetLeft + step + 'px';
        }else{
          block.style.left = block.offsetLeft + step/2 + 'px';
        }
        break;

      case 16:
        if(shift == false){
        block.style.height = 60 + 'px';
        shift = true;
      }else{
        block.style.height = 100 + 'px';
        shift = false;
      }
      break;

      case 32:
        if(shift == true){
        }else{
          Jump();
        }
      break;

      
      
    }
}

function Jump(){

  block.style.top = block.offsetTop - 3*step + 'px';
  z += 3*step;

  setTimeout(function(){
    block.style.top = block.offsetTop + 3*step + 'px';
    z -= 3*step; 
  }, 500)

  if(z == 25*step){
    document.write('USER WIN');
  }
}


function inWindow(block){
  var startpointX = 0,
      startpointY = 0,
      endPointX = window.innerWidth,
      endPointY = window.innerHeight,
      x = block.offsetLeft,
      y = block.offsetTop,
      w = block.offsetWidth,
      h = block.offsetHeight,
      buffer = step + 5;

      if(x>= buffer && x + w <= endPointX - buffer && y >= buffer && y + h <= endPointY - buffer){
        return true;     
      }else if(x < buffer){
        block.style.left = startpointX + buffer + step + 'px';
        
      }else if(x + w >= (endPointX - buffer)){

        block.style.left =  endPointX - buffer - step - w + 'px';
      }else if(y < buffer){
        block.style.top = startpointY + buffer + step + 'px';
      }else if(y + h >= (endPointY - buffer)){
        block.style.top =  endPointY - buffer - step - h + 'px';
      }

    return false;
}

}
    