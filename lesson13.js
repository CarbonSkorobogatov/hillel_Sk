window.onload = function(){
  function Person(p1, p2){

    this.name = p1;
    this.age = p2;
  }

  var person = new Person('Katya', 23);
  console.log(person);
}
