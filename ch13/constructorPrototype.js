function Person(name) {
    this.name = name;
  }
  
  let p1 = new Person("Alex");
  
  console.log(Object.getPrototypeOf(p1));
  console.log(Person.prototype);
  