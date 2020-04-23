Admin = {
    surname : 'Skripkin',
    name : 'Artem',
    age: 1,
    HighEducation: true,
    married: false,
    salary: [10, 100, 1000, 'q', 10000], 

    Numbers: {
        First: 1,
        Second: 2,
    }
}

Store = {
    city: 'Odessa',
    address: 'Ingezli 32',
    StoreName: 'Auto House',
    Orenda: 100000,
    CostAllProsuct: ['qwe', 1000000]
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

sumOfNumer = 0;
for(i = 0; i < Massive.length; i++){
    
    x = parseInt(Massive[i]); 
    if(Array.isArray(Massive[i]) == true){
        for(j = 0; j < Massive[i].length; j++){
            x = Massive[i][j]
            
            if(isNaN(x)==false){
            sumOfNumer += x;
            }

        }
    }else if(isNaN(x)==false){
        sumOfNumer += x;
    }
}

console.log(Massive);
console.log('Сумма всех числовых значений в поле равно: ', sumOfNumer);