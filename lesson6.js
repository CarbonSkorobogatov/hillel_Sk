

function sum (a, b){
    return a + b;    
}
function getMax(list){
    console.log(list);


    max = list[0];
    for(i = 1; i < list.length; i++){
        if (max < list[i]){
            max = list[i];
        }
    }
    return max;
}



//c = sum(10, 10);
//console.log(c);
/*----------------------------------------------------------------------------------------------------------------------------------------------------*/
//console.log(getMax([1,2,3,4,5,6,7,8,9,10,11,10,9,8,7,6,5,4,3,2,1]))
/*Область видимсти. Правила как живут переменные на просторах страницы, слушать и читать об этом внимательно. Область видимость - var - это private */

function f(){
    x = 10; //public 
    var y = 10; //local 

    
    console.log('f - before', x);
    console.log('y - global', window.y);
    console.log('y - local', y);
}

//y = 100;
//f();
/*x - is key of Object, no variable*/
//console.log('f - after', x);

function z1(){
    var x1 = 10;


    console.log(arguments);
    f1();
    f2();

    function f1() {
        var y = 20;

        console.log('f1', x1, y ,z);
    }

    function f2() {
        console.log('f2', x1, z)
    }

}

var z = 30;//global
z1(1,2,3,4,5,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0);


