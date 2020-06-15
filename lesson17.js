//Read about this function and watch all video (it's about 3 hour )

// JS - async code;
//Synchrone code - while first code doesn't end, second doesn't begin; 

console.log('do');
var timer = new Promise( function(resolve, reject){
    //resolve();
    //reject();

    var timer = Math.floor(Math.random()*2000);
    console.log('v');
    
    
    setTimeout(function(){
        
        if(timer%2 == 0){
        resolve(timer);
        }

        reject(timer);
    }, timer)
    
})
console.log('posle');


/*
timer.then(function(data){
    console.log('Done', data);
})
*/
/*
timer
    .then(
        function(){console.log('1')}, 
        function(){console.log('1')})
*/

timer
        .then(function(){
            console.log('done');
        })
        .catch(function(){
            console.log('404');
        })