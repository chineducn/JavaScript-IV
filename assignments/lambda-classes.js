// CODE here for your Lambda Classes
class Human {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}`)
    }  
}

class Instructor extends Human {
    constructor(name, age, location, specialty, favLanguage, catchPhrase) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${studemt} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(name, age, location, previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = [];
    }

    listsSubjects() {

    }

    PRAssignment(subject) {
        console.log(`The ${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(``)
    }
}

//  Testing code
// let prime = new Human('Austen', 50, 'San Francisco');
// prime.speak();
// let shades = new Instructor('Gabe', 60, 'Utah', 'Torture', 'ketchup', `I'm going to get fired.`);
// shades.speak()