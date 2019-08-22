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

class Student extends Human {
    constructor(name, age, location, previousBackground, className, [favSubjects]) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = [favSubjects];
    }

    listsSubjects() {

    }

    PRAssignment(subject) {
        console.log(`The ${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class TeamLead extends Instructor {
    constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, specialty, favLanguage, catchPhrase);        
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times`)
    }

    debugsCode({student},subject) {
        console.log
    }
}

// constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor)

//  Testing code
// let prime = new Human('Austen', 50, 'San Francisco');
// prime.speak();
// let shades = new Instructor('Gabe', 60, 'Utah', 'Torture', 'ketchup', `I'm going to get fired.`);
// shades.speak()
// let baggins = new Student('frodo', 200, 'middle earth', 'farmer', 'da fellowship', ['brooding', 'walking', 'precious'])
// baggins.sprintChallenge('modor');
// console.log(baggins)
// let cheeky = new TeamLead('Patrick', 50, 'bedrock', 'jokes', 'js', 'May the stretch be with you', 'webeu1', 'Gabe');
// cheeky.speak();