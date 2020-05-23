window.onload = function(){
    range = document.getElementById('rangeId');
    text = document.getElementById('textId');
    h = 100;
    document.getElementById('green');
    range.value = 0;
    text.value = 0;
    Ctext = 0;
    Crange = 0;

    setInterval(function(){
        if(text.value != Ctext){
            if(isNaN(text.value) == true){
                console.log('text');
            }else if(text.value < 100 && text.value > 0){
                range.value = text.value;
                Ctext = text.value;
                console.log('text 0 - 100');
            }else if(text.value > 100){
                text.value = 100;
                range.value = text.value;
                Ctext = text.value;
                console.log('text 100+');
            }else if(text.value < 1 ){
                text.value == 1;
                range.value = text.value;
                Ctext = text.value;
                console.log('text 1-');
            }
        }else if(range.value != Crange){
            text.value = range.value;
            Crange = range.value;
            console.log('range');
            
            if(range.value == 0){
                range.value = 1;
                text.value = range.value;
                Crange = range.value;
                console.log('range 0');
            }
        }else{
            console.log('fine ok');
        }

        x = text.value;
        document.getElementById('green').style.height = text.value + "px";
        if(x < 20){
            document.getElementById('red').style.height = (h/100)*2 + "px"; 
            z = 2; 
        }else if(x >= 20 && x < 50){
            document.getElementById('red').style.height = (h/100)*4 + "px";
            z = 4;
        }else if(x>= 50 && x < 75){
            document.getElementById('red').style.height = (h/100)*6 + "px";
            z = 6;
        }else if(x >= 75){
            document.getElementById('red').style.height = (h/100)*8 + "px";
            z = 8;
        }
        
        document.getElementById('red').style.marginTop = 108 - z - text.value + "px";
    }, 100)

}

