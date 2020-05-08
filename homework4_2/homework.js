/*Создать массив --> Узнать сумму столбца --> Проверка на меньше нуля --> удаление столбца.*/


//Создание массива
n = 10;
A = [];
A.length = n;

for(i = 0; i < A.length; i++)
{
    A[i] = [];
    A[i].length = n;
    for(j = 0; j < A[i].length; j++){
        A[i][j] = Math.floor(Math.random()*41 - 20);

    }
}


//Узнать сумму столбца
B = [];
B.length = n;

for (j = 0; j < A.length; j++) {
    sum = 0;
    for (i = 0; i < A.length; i++) {
        sum += A[i][j];
    }
    if (sum <= 0) {
        B[j] = 1;
    } else {
        B[j] = 0;
    }
}
console.log(A);
console.log(B);

for(i = 0; i < B.length; i++){
    if(B[i] == 1){
        for(j = 0; j < A[i].length; j++){
            A[j][i] = NaN;
        }
    }
}


for(i = 0; i < A.length; i++){
    for(j = 0; j < A[i].length; j++){
        if(isNaN(A[i][j])){
            A[i].splice(j, 1);
        }
    }
}


console.log(A);
/*splice - не работает адекватно, сколько не пытался, не работает*/ 