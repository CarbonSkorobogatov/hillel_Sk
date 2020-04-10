// я считаю что 1 член ряда это 1

n = parseInt(prompt());
a = 1;
b = 1;

if (n > 2)
    {
    document.write(1 , " член ряда равняется - " , a, '<br>');
    document.write(2,  " член ряда равняется - " , b, '<br>');
    for (i = 3; i <= n; i++) 
        {
        c = a + b;
        a = b;
        b = c;
        document.write(i, " член ряда равняется - " , c, '<br>');
        }
    }else
    {
        for(i = 1; i <= n; i++)
        {
            document.write(i, " член ряда равняется - " , a, '<br>');
        }
    }
