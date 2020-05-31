    class Field{
        constructor(sizeX, sizeY){
            this._arr = new Array(sizeX);

            for(var i = 0, j; i < this._arr.length; i++){
                this._arr[i] = new Array(sizeY);
                for(j = 0; j < this._arr[i].length; j++){
                    this._arr[i][j] = 0;
                }
            }
            
            lengthX = sizeX;
            lengthY = sizeY;
        }
        
        render(){
            for(var i = 0, j; i < this._arr.length; i++) {
                for(j = 0; j < this._arr[i].length; j++) {
                    document.write(this._arr[i][j] + ' ');
                }
                document.write('<br />');
            }
            document.write('<hr />');
        }

        changeSize(newSizeX, newSizeY){
            this._arr = new Array(newSizeX);
            for(var i = 0, j; i < this._arr.length; i++){
                this._arr[i] = new Array(newSizeY);
                for(j = 0; j < this._arr[i].length; j++){
                    this._arr[i][j] = 0;
                }
            }
        }

        clearField(){
            for(var i = 0, j; i < this._arr.length; i++){
                for(j = 0; j < this._arr[i].length; j++){
                    this._arr[i][j] = 0;
                }
            }
            lengthX = sizeX;
            lengthY = sizeY;
        }

        GeneratePlayer(X, Y){
            this._arr[X][Y] = 1;
        }


    }

    class Person{
        constructor(name, XPosition, YPosition){
            this.name = name;
            this.XPosition = XPosition;
            this.YPosition = YPosition; 
        }
        
        start(){
            if(this.XPosition <= lengthX && this.YPosition <= lengthY){
                test.GeneratePlayer(this.XPosition, this.YPosition);
            }else if(this.XPosition > lengthX){
                while(this.XPosition > lengthX){
                    this.XPosition = this.XPosition - lengthX;
                }
            }else{
                while(this.YPosition > lengthY){
                    this.YPosition = this.YPosition - lengthX;
                }
            }
             
        }

    }

    var lengthX, lengthY;
    var test = new Field(10, 30);

    var Player = new Person('S', 1, 1);
    




