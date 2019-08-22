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
        console.log(`${student.name} receives a perfect score on ${subject}`)
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
        console.log(`${this.name} has submitted a PR for ${subject}`);
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

    debugsCode(student,subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

// constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor)

//  Testing code
let prime = new Human('Austen', 50, 'San Francisco');
let primejr = new Human('Ally', 55, 'San Junipero');
let shades = new Instructor('Gabe', 60, 'Utah', 'Torture', 'ketchup', `I'm going to get fired.`);
let bigGuy = new Instructor('Jamie', 45, 'Carlifornia', 'React', 'Klingon', 'Trust the process');
let baggins = new Student('Frodo', 200, 'middle earth', 'farmer', 'da fellowship', ['brooding', 'walking', 'precious'])
let ears = new Student('Legolas', 300, 'The Vale', 'being young', 'da fellowship', 'targetting')
let cheeky = new TeamLead('Patrick', 50, 'bedrock', 'jokes', 'js', 'May the stretch be with you', 'webeu1', 'Gabe');
let helpful = new TeamLead('Flint', 87, 'lambda', 'TL hours', 'All', 'I am already ready', 'webeu1', 'Gabe');

// prime.speak();
// primejr.speak();

// bigGuy.demo('Onboarding');
// shades.grade(baggins, 'responsive design');

baggins.PRAssignment('modor orientation')
baggins.sprintChallenge('modor');
// console.log(baggins)

// cheeky.standUp('webeu3_patty');
// helpful.debugsCode(ears, 'Javascript IV');