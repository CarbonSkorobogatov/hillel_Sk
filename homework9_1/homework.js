var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var input3 = document.querySelector('.input3');
var textareas = document.querySelector('.idtextarea');


setInterval(function(){

    
    textareas.value = input1 + ',' + input2 + ',' + input3;
}, 2000)






