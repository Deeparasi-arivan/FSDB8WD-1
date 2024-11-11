class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Employee extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }
  getID() {
    return this.id;
  }
}

let emp = new Employee("John", 1001);
console.log(emp.getName());
console.log(emp.getID());
