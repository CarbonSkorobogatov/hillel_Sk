window.addEventListener('load', function(){
    var promise = new Promise(function(resolve, reject){
       
        var input = document.getElementById('input'),
            values = [];

        document.onkeydown = function(event){
            if(event.keyCode == 13){
                if(input.value == '&'){
                    console.log('&');
                    input.disabled = true;
                    return resolve(values);
                }
                x = parseInt(input.value);                
                if(isNaN(x) == true){
                
                }else{
                    values.push(x);
                }
                input.value = '';
            }
        }

        setTimeout(function(){
            input.disabled = true;
            return resolve(values);
        }, 10000)
        
    })


    promise.then(data =>{
        console.log(data);
        }
    )

})

