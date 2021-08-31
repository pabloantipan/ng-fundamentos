import { NgIfContext } from "@angular/common";

// tipping
const username: string | number = 'pabloantipan';
const sum = (a: number, b: number) => {
  return a + b;
}

sum(a, b);

class Person {
  public age: number,
  public lastName: string,

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const pablo = new Person(15, 'Antipan');
pablo.age;


