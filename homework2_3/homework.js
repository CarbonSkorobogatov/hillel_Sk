x = +prompt();

k = 0;
for(i = 1; i <= x; i++){
    if(x % i == 0){
        k++;
    }
}
if(k == 2){
    document.write('Число  ', x, '  простое число, оно делится на 1 и на ', x)
}else{
    document.write('Число  ', x, '- НЕ ЯВЛЯЕТСЯ ПРОСТЫМ ЯВЛЯЕТСЯ. Оно делится более двух ч')
}
