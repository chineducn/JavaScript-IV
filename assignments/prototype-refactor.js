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
  
//Testing code

//   let first = new Person('John', 45);
//   console.log(first.greet());
//   first.eatEdible('cookie');
//   first.eatEdible('apple');
//   first.eatEdible('pie');
//   console.log(first.stomach);
//   first.poop();
//   console.log(first.stomach);


/*
  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.
*/


//Native solution

// function Car(model, make) {
//     this.car_model = model;
//     this.car_make = make;
//     this.odometer = 0;
//     this.canBeDriven = true;
//   }
  
//   Car.prototype.drive = function(distance) {
//     if(this.canBeDriven) {
//      return this.odometer += distance;
//     }
//     return `I crashed at ${this.odometer} miles.`;  
//   }
  
//   Car.prototype.crash = function() {
//     return this.canBeDriven = false;
//   }
  
//   Car.prototype.repair = function() {
//     return this.canBeDriven = true;
//   }


//Refactoring use class

class Car {
    constructor(model, make) {
        this.car_model = model;
        this.car_make = make;
        this.odometer = 0;
        this.canBeDriven = true;
    }

    drive(distance) {
        if(this.canBeDriven) {
            return this.odometer += distance;
        }
        return `I crashed at ${this.odometer} miles.`; 
    }

    crash() {
        return this.canBeDriven = false;
    }
      
    repair() {
        return this.canBeDriven = true;
    }
}

  //Testing code

//   let myfirst = new Car('nissan', 'sunny');
//   console.log(myfirst.drive(120));
//   console.log(myfirst.drive(120));
//   myfirst.crash();
//   console.log(myfirst.drive(120));
//   myfirst.repair();
//   console.log(myfirst.drive(120));
//   myfirst.crash();
//   console.log(myfirst.drive(120));
