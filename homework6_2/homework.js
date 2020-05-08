function fillArray(A, l){
    
    for(i = 0; i < l; i++){
        A[i] = Math.floor(Math.random()*201 - 100)
    }
    
    return A;
}

B = [];
n = Math.floor(Math.random()*41);

B = fillArray(B, n);

console.log(B);



