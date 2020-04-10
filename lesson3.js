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
A.push(50); //Добавление, возращает длину
A.pop();    //Обрезает, возращает значение
A.pop();

// сплайс - метод быстро внедрить

res = A.slice(2, 5); //from x to y  

tres = A.slice(2); //from x to end
ores = A.slice(-15);
console.log('sliced - ', res );
console.log('sliced - ', tres );
console.log('sliced - ', ores );

console.log(A);



