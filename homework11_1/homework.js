window.onload = function(){
  var block = document.querySelector('.block');
  var text = document.querySelector('.Bams');
  step = 10;
  var bams = true;
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
        block.style.left = startpointX + buffer + 2*step + 'px';
        Bans();
      }else if(x + w >= (endPointX - buffer)){
        block.style.left =  endPointX - buffer - 2*step - w + 'px';
        Bans();
      }else if(y < buffer){
        block.style.top = startpointY + buffer + 2*step + 'px';
        Bans();
      }else if(y + h >= (endPointY - buffer)){
        block.style.top =  endPointY - buffer - 2*step - h + 'px';
        Bans();
      }


      function Bans(){
        
        if(bams  == true){
          text.classList.toggle('active');
          bams = false;
          setTimeout(function(){
            text.classList.toggle('active');
            bams = true;
          }, 2000)
        }
      }



    return false;
}

}
    