n = parseInt(prompt("Введите размерность одномерного массива "));

/*Пользователь может вввести число, которое будет отрицательнное, поэтому я создал такую проверку*/ 
if(n <= 0 || isNaN(n) == true){
    while(n <= 0 || isNaN(n)){
        n = parseInt(prompt("Введите размерность одномерного массива. Подсказка n > 0 "));
    }
}
A = [];
A.lenght = n;

for(i = 0; i < n; i++){
    A[i] = Math.floor(Math.random() * 101 - 50);
    console.log(i + 1, ') ' , A[i]);
}

max = A[0]; maxk = 0; min = A[0]; mink = 0;

for(i = 1; i < A.lenght; i++){
    if(A[i] > max){
        max = A[i];
        maxk = i;
    }
    if(A[i] < min){
        min = A[i];
        mink = i;
    }
}

console.log('min = ', min, 'Numer is: ', mink);
console.log('max = ', max, 'Numer is: ', maxk);




console.log('--------------------------');
if(mink < maxk){
    k = maxk - mink - 1;
    console.log('k = ', k);
    
    B = [];
    B.lenght = k;
    console.log("Ряд от минимального до максимального значения");
    for(i = 0, j = mink + 1; i < k, j < maxk; i++, j++){
        B[i] = A[j];
        console.log(B[i], "Номер этого числа в ряду А", j + 1);
    }
    if(k==0){
        console.log('Минимальное и максимальное число - соседи');
    }
}else{
    k = mink - maxk - 1;
    console.log('k = ', k);
    
    B = [];
    B.lenght = k;
    console.log("Ряд от максимального до минимального значения");
    
    for(i = 0, j = maxk + 1; i < k, j < mink; i++, j++){
        B[i] = A[j];
        console.log(B[i], "Номер этого числа в ряду А", j + 1);
    }
    if(k==0){
        console.log('Максимальное и минимальное число - соседи');
    }
}










