window.addEventListener('load', function(){
    var tds = document.getElementsByTagName('td');
    var Names = [], 
        Cost = [];

    for(var i = 0, k = 0, j = 0; i < tds.length; i++) {
        if((i+1)%2==0){
            Cost[k] = tds[i].innerHTML;
            k++;
        }else{
            Names[j] = tds[i].innerHTML;
            j++;            
        }
    }
    console.log(Cost);
    console.log(Names);
    
})