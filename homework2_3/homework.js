n = parseInt(prompt("Введите число: "));

if (n <= 0 || isNaN(n) == true) {
    while (n <= 0 || isNaN(n)) {
        n = parseInt(prompt("Введите число, которое больше нуля"));
    }
}
k = 0;
for(i = 1; i <= n; i++){
    if(n % i == 0){
        k++;
    }
}
if(k == 2){
    document.write('Число  ', n, '  простое число, оно делится на 1 и на ', n);
}else{
        document.write('Число  ', n, '- НЕ ЯВЛЯЕТСЯ ПРОСТЫМ ЯВЛЯЕТСЯ. Оно делится более двух числа');
        }

