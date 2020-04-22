Admin = {
    surname : 'Skripkin',
    name : 'Artem',
    age: 1,
    HighEducation: true,
    married: false,
    salary: [10, 100, 1000, 'q']
}

Store = {
    city: 'Odessa',
    address: 'Ingezli 32',
    StoreName: 'Auto House',
    Orenda: 10000,
    CostAllProsuct: ['qwe', 100000]
}

Massive = [];
    for(key in Admin){
        pole = key;
        polesName = Admin[key];
        console.log(pole);
        console.log(polesName); 
        
        Massive.push(pole);
        Massive.push(polesName);
    }
    for(key in Store){
        pole = key;
        polesName = Store[key];
        console.log(pole);
        console.log(polesName); 
        
        Massive.push(pole);
        Massive.push(polesName);
    }
/*
    Можно всё в массив отправить так, но будет двомерный
    Massive.push(Object.keys(Admin));
    Massive.push(Object.values(Admin));
*/

sumOfNumer = 0;
for(i = 0; i < Massive.length; i++){
    x = parseInt(Massive[i]);
    if(isNaN(x)==false){
        sumOfNumer += x;
        if(Array.isArray(Massive[i]) == true){   
            
            //Для упрощения и не повторения одного и того же действия тут можно использовать функцию, назвать NaNTeast(), которая бы принимала x и возращала true or false
            //Но ты говорил пока их не использовать, а точки goto в js не работают, как в С++ или в С#, поєтому я наш'л только такое решение.
            //При этом это решение даёт полностью найти все числа и записать в результат, независимо, где он находится. 
            for(j = 1; j < Massive[i].length; j++){
                x = Massive[i][j]
                if(isNaN(x)==false){
                    sumOfNumer += x;
                }
            }
        }
    }else if(Array.isArray(Massive[i]) == true){
        for(j = 1; j < Massive[i].length; j++){
            x = Massive[i][j]
            if(isNaN(x)==false){
            sumOfNumer += x;
            }
        }
    }   
}


console.log(Massive);
console.log('Сумма всех числовых значений в поле равно: ', sumOfNumer);