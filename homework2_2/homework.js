x = parseInt(prompt("Введите число"));
y = parseInt(prompt("Введите число, которое больше приведущего"));


//я считал учитывая, что факториал 0 = 1
if(x < y && x > 0 && y > 0)
{
    for( i = x; i <= y; i++)
    {
        factorial = 1;
        for(j = 1; j <= i; j++)
        {
            factorial = j * factorial;
        }
        document.write("Факториал числа - ", i, "  равняется  ", factorial, "<br>");
    }
}
else{
    alert("ввод неправильных данных");
}

document.write("*************************************************<br>");
document.write("Чётные числа от 0 до 100 <br>");

for(i = 0; i <=100; i++){
    if(i % 2 == 0){
        document.write(i,"<br>");
    }

}



