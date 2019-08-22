/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty. 
*/

//Native solution

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.stomach = [];
//   }
  
//   Person.prototype.greet = function() {
//     return `Hi, my name is ${this.name} and I'm ${this.age}`;
//   }
//   Person.prototype.eatEdible = function(edible) {
//     this.stomach.push(edible);
//   }
//   Person.prototype.poop = function() {
//     this.stomach = [];
//   }

//Refactoring to class
  
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    greet() {
        return `Hi, my name is ${this.name} and I'm ${this.age}`;
    }

    eatEdible(edible) {
        this.stomach.push(edible);
    }

    poop() {
        this.stomach = [];
    }
}
  
//   let first = new Person('John', 45);
//   console.log(first.greet());
//   first.eatEdible('cookie');
//   first.eatEdible('apple');
//   first.eatEdible('pie');
//   console.log(first.stomach);
//   first.poop();
//   console.log(first.stomach);