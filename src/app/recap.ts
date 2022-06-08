const username = 'nicobytes';
const username2: string = 'elvis';
var username3: string | number = 1;
username3 = 'ismaelvs'

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2)

class Person {
  age: number;
  //private age: number; //por defecto todas las propiedades son publicas a menos que se coloque la palabra reservada "private"
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

class Person2 {


  constructor(public age: number, public lastName: string) {

  }
}

const nico = new Person(15, 'Anthony');
nico.age;

const nico2 = new Person2(16, 'Anthony');
nico2.age;

const saludar = (persona: Person) => `hola soy ${persona.lastName} y tengo ${persona.age} años`
