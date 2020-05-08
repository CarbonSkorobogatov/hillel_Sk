function f1(min, max){
    var res;
    // f1.LexicalEnvironment = {min, max, res}; отображнние локальных переменных 
    //f1.scope - link (LE - part of function or global) of parent 
    
    console.log(f2());

    return res = Math.abs(min - max);

    function f2(){
        // f1.LexicalEnvironment = {}; отображнние локальных переменных 
        //f1.scope - link (LE - part of function or global) of parent (min, max, res)
        
        res = min*max;
        return res;
    }
}

//console.log(f1(40, 100));

function parent(x){
    var y = 0;
    return child(x+y);

    function child(x){
        var p = 10;

        return x + p + global_z + y; // y - замыкание - это использование использование переменной выше перепенной, не глобальной. Замыкание - это функция, которой видны все переменые
    }

}

function factory(z = 0){

    return function inner(x, y){
        return x + y + z;
    }
}

global_z = 7000;
console.log(parent(70));

var fooBar = factory(100);
console.log(fooBar(7,9));
