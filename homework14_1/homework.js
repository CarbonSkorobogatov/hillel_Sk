var Config = {
    SizeM: 10,      // Width of my field
    SizeN: 10,      // Height of my field
    Names: [],      //Array of Names of hero
    Step: [],
    PlayerNumber: [],
    quantity: 0,    //Quantity of Player
    pole: [],       //Array where I save my field
    
}

class Field{
    
    constructor(M, N){
        Config.pole = new Array(M);

        for(var i = 0, j; i < M; i++){
            Config.pole[i] = new Array(N);

            for(j = 0; j < N; j++){
                Config.pole[i][j] = 0;
            }
        }
    }

    render(){
        for(var i = 0, j; i < Config.SizeM; i++){
          for(j = 0; j < Config.SizeN; j ++){
              document.write(Config.pole[i][j] + ' ');
          }  
          document.write('<br />');
        }
        document.write('<hr />');
    }

    changeSize(NewM, NewN){
        Config.SizeM = NewM;
        Config.SizeN = NewN;

        for(var i = 0, j; i < Config.SizeM; i++){
            for(j = 0; j < Config.SizeN; j++){
                Config.pole[i][j] = 0;
            }
        }

    }

    clearField(){
        for(var i = 0; i < Config.pole.length; i++){
            for(var j = 0; j < Config.pole[i].length; j++){
                if(Config.pole[i][j] == 0){
                }else{
                    Config.pole[i][j] = 'S'; 
                }
            }
        }
    }
}

class Person{
    
    constructor(Name, X, Y){
        var z = Config.quantity;

        /*Запись в класс*/
        this.Name = Name;
        this.pX = X;
        this.pY = Y;

        this.spX = X;
        this.spY = Y;

        
        /*Запись в объект*/ 
        Config.Names[z] = Name;

        /*Работа с внутрнеими премеными объекта*/
        Config.quantity++;
        Config.Step[z] = 0;
        Config.PlayerNumber[z] = Config.quantity;

        this.Step = Config.Step[z];
        this.Number = Config.PlayerNumber[z];
    }


    start(X, Y){
        if(this.Step == 0){
            if(X <= Config.SizeM && Y <= Config.SizeN){
                One(X,Y);
                field.render();

            }else if(X > Config.SizeM && Y > Config.SizeN){
                
                while(X > Config.SizeM && Y > Config.SizeN){
                    X = X - Config.SizeM;
                    Y = Y - Config.SizeN;
                }
                
                One(X,Y);
                field.render();
            }else if(X > Config.SizeM){

                while(X > Config.SizeM){
                    X = X - Config.SizeM;
                }

                One(X,Y);
                field.render();

            }else if(Y > Config.SizeN){

                while(Y > Config.SizeN){
                    Y = Y - Config.SizeN;
                }

                One(X,Y);
                field.render();
            }
        }else{

            console.log('Этот персонаж уже стартовал');

        }
        this.Step++;
        this.pX = X;
        this.pY = Y;
    }

    go(direction, step){
        if(this.Step > 0){
            Zero(this.pX, this.pY) 
            switch (direction){
                case 'left':
                    if(this.pY - step >= 0){
                        this.pY -= step;  
                        One(this.pX, this.pY);
                    }else{ 
                        this.pY = 0; 
                        One(this.pX, this.pY);
                    }
                    break;
                
                case 'right':
                    if(this.pY + step <= Config.SizeN){
                        this.pY +=step;
                        One(this.pX, this.pY);
                    }else{
                        this.pY = Config.SizeN; 
                        One(this.pX, this.pY);
                    }
                    break;

                case 'top':
                    if(this.pX - step >=0){
                        this.pX -= step;
                        One(this.pX, this.pY);
                    }else{
                        this.pX = 0;
                        One(this.pX, this.pY);
                    }
                break;

                case 'bottom':
                    if(this.pX + step <= Config.SizeM){
                        this.pX += step;
                        One(this.pX, this.pY);
                    }else{
                        this.pX = Config.SizeM;
                        One(this.pX, this.pY);
                    }
                    break;

                default:
                    One(this.pX, this.pY);
                    console.log('Please, enter right arguments');
            }
        }else{
            console.log('This Player don t started');
        }
        field.render();
    }

    resetPosition(){
        Zero(this.pX,this.pY);
        this.pX = this.spX;
        this.pY = this.spY;
        One(this.pX, this.pY);

    }

}


function One(x,y){
    if (Config.pole[x][y] >= 1)
    {
        Config.pole[x][y] += 1;
    }else{
        Config.pole[x][y] = 1;
    }
}
function Zero(x,y){
    if (Config.pole[x][y] >= 1)
    {
        Config.pole[x][y] -= 1;
    }else{
        Config.pole[x][y] = 0;
    }
}






var field = new Field(Config.SizeN, Config.SizeM);
var Player1 = new Person('S', 1, 1);
var Player2 = new Person('T', 2, 2);
var Player3 = new Person('F', 3, 3);




