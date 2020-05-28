window.onload = function(){
  class Person{

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    run(){
      console.log(this.name + ", and he (she) is  " + this.age); 
    }
  }

  
  var user = new Person('Katya', 29);
  user.run();
}
