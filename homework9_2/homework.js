window.onload = function(){
    var input = document.querySelector('.input');
    var Text = document.querySelector('.error');

    x = 0;
    counter = 0;
    interation = 0;
    setInterval(function(){
        for(let char of input.value)
        {
          if(Choosing(char) == false){
              if(x != counter){
                  //add class
                  input.classList.toggle('border-red');
                  Text.style.display = "inline";
                  x = counter;
                  interation++;
                  break;
              }else if(counter == 0){
                //if first symbol will be number or " "
                input.classList.toggle('border-red');
                Text.style.display = "inline";
                x ++;
                counter++;
                break;
              }else {

                interation++;
                break;
              }
          }
          else{

            if(counter != interation){
              //Remove class and text
                input.classList.toggle('border-red');
                Text.style.display = "none";
            }
            counter++;
            interation = counter;
          }
        }
    },
    100)
}

function Choosing(x){
  C = [1,2,3,4,5,6,7,8,9," "];

  for(i = 0; i < C.length; i++){
    if(C[i] == x){
      return false;
    }
  }
}
