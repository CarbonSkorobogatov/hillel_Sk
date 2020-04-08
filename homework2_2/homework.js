x = +prompt();
y = +prompt();

res = 1;
if (x < y) {
    for (i = x, j = 1; i < y, j <= i; i++, j++) {
        res = res * j;
        document.write(res, "<br>");
    }
}