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

for(i = 0, j = (A.lenght - 1); i < A.lenght, j >= 0; i++, j--){
    
    if(j > i){
        a = A[i];
        b = A[j];

        A[i] = b;
        A[j] = a;
    }
}
console.log('------------------------------------------');
for(i = 0; i < n; i++){
    console.log(i + 1, ') ' , A[i]);
}














