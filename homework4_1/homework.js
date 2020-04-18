n = 10;

A = [];
A.length = n;

for (i = 0; i < A.length; i++) {
    A[i] = [];
    A[i].length = n;

    for (j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 41 - 20);
        console.log(A[i][j]);
    }
}