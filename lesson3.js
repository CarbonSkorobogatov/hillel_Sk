A = [];
A.lenght = 20;
console.log(A);

for(i = 0; i < A.lenght; i++){
    A[i] = Math.floor(Math.random() * 101 - 50);

    console.log(A[i]);
}

max = A[0];
min = A[0];
sum = 0;
mul = 1;

for(i = 1; i < A.lenght; i++){
    if(max < A[i]){
        max = A[i];
    }
    if(A[i] < min){
        min = A[i];
    }
    mul *= A[i];
    sum += A[i];
}
/*
console.log('max = ', max);
console.log('min = ', min);
console.log('sum = ', sum);
console.log('mul = ', mul);
*/
//-----------------------------------------------------------------------------------------//
A.push(50); //Добавление
A.pop();
A.pop();
console.log(A)

