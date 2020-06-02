window.onload = function(){
  var block = document.querySelector('.img');
  var shift = false;
  step = 10;


    document.onkeydown = function(event){



      if(!inWindow(block)){
        return;
      }

    switch(event.keyCode){
      case 37:
        block.style.left = block.offsetLeft - step + 'px';
        break;

      case 38:
        block.style.top = block.offsetTop - step + 'px';
        break;
      
      case 39:
        block.style.left = block.offsetLeft + step + 'px';
        break;
      
      case 40:
        block.style.top = block.offsetTop + step + 'px';
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