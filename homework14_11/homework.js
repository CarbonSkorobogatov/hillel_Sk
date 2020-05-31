var Config = {
    SizeM: 10,      // Width of my field
    SizeN: 10,      // Height of my field
    Names: [],      //Array of Names of hero
    

    PositionX:[],
    PositionY: [],

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
                Config.pole[X][Y] = 1;
                field.render();

            }else if(X > Config.SizeM && Y > Config.SizeN){
                
                while(X > Config.SizeM && Y > Config.SizeN){
                    X = X - Config.SizeM;
                    Y = Y - Config.SizeN;
                }
                
                Config.pole[X][Y] = 1;
                field.render();
            }else if(X > Config.SizeM){

                while(X > Config.SizeM){
                    X = X - Config.SizeM;
                }

                Config.pole[X][Y] = 1;
                field.render();

            }else if(Y > Config.SizeN){

                while(Y > Config.SizeN){
                    Y = Y - Config.SizeN;
                }

                Config.pole[X][Y] = 1;
                field.render();
            }
        }else{

            console.log('Этот персонаж уже стартовал');

        }
        this.Step++;
        this.pX = X;
        this.pY = Y;
        Set(this.pX, this.pY, (this.Number - 1));
    }

    go(direction, step){
        if(this.Step > 0){
            Config.pole[this.pX][this.pY] = 0; 
            switch (direction){
                case 'left':
                    if(this.pY - step >= 0){
                        this.pY -= step; 
                        Config.pole[this.pX][this.pY] = 1; 
                    }else{ 
                        this.pY = 0; 
                        Config.pole[this.pX][this.pY] = 1;
                    }
                    break;
                
                case 'right':
                    if(this.pY + step <= Config.SizeN){
                        this.pY +=step;
                        Config.pole[this.pX][this.pY] = 1;
                    }else{
                        this.pY = Config.SizeN; 
                        Config.pole[this.pX][this.pY] = 1;
                    }
                    break;

                case 'top':
                    if(this.pX - step >=0){
                        this.pX -= step;
                        Config.pole[this.pX][this.pY] = 1; 
                    }else{
                        this.pX = 0;
                        Config.pole[this.pX][this.pY] = 1; 
                    }
                break;

                case 'bottom':
                    if(this.pX + step <= Config.SizeM){
                        this.pX += step;
                        Config.pole[this.pX][this.pY] = 1;
                    }else{
                        this.pX = Config.SizeM;
                        Config.pole[this.pX][this.pY] = 1;
                    }
                    break;

                default:
                    Config.pole[this.pX][this.pY] = 1; 
                    console.log('Please, enter right arguments');
            }
        }else{
            console.log('This Player don t started');
        }
        field.render();
        Set(this.pX, this.pY, (this.Number - 1));
    }

    resetPosition(){
        Config.pole[this.pX][this.pY] = 0;
        this.pX = this.spX;
        this.pY = this.spY;
        Config.pole[this.pX][this.pY] = 1;

        Set(this.pX, this.pY, (this.Number - 1));
    }

}


function Set(X,Y, N){
    Config.PositionX[N] = X;
    Config.PositionY[N] = Y;
}






var field = new Field(Config.SizeN, Config.SizeM);
var Player1 = new Person('S', 1, 1);
var Player2 = new Person('T', 2, 2);
var Player3 = new Person('F', 3, 3);
var Player3 = new Person('F', 4, 4);



