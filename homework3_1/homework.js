n = parseInt(prompt("Введите размерность одномерного массива "));

/*Пользователь может вввести число, которое будет отрицательнное, поэтому я создал такую проверку*/
if (n <= 0 || isNaN(n) == true) {
    while (n <= 0 || isNaN(n)) {
        n = parseInt(prompt("Введите размерность одномерного массива. Подсказка n > 0 "));
    }
}
A = [];
A.length = n;

B = [];
B.length = n;
b = 0;

for (i = 0; i < n; i++) {
    A[i] = Math.floor(Math.random() * 101 - 50);
    console.log(A[i]);

    k = 0;
    for (j = 2; j < A[i]; j++) {
        if (A[i] % j == 0) {
            k++;
            break;
        }
    }
    if (k == 0 && A[i] > 0) {
        B[b] = A[i];
        b++;
    }
}

max = A[0];
min = A[0];
for (i = 1; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i];
    }
    if (A[i] < min) {
        min = A[i];
    }
}
console.log('max = ', max);
console.log('min = ', min);


console.log("---------------------------");
console.log('B: ');
B.lenght = b;
for (i = 0; i < b; i++) {
    console.log(B[i]);
}