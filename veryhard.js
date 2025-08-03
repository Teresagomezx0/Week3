"use strict";
console.log("THIS IS WHERE 'VERY HARD' STARTS....");
//first I will make the person class which will serve as a template
class Person {
  //constructor is the function that runs when creating a new object using said class
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exercise() {
    console.log(`${this.name} says: Running is fun... sais no one ever.`);
  }
  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

//this will be the programmer class and inherit from the class above
class Programmer extends Person {
  //we use extends to be able to inherit from another class in this case it is telling the program to use Person as the blueprint
  constructor(name, job, age, languages) {
    super(name, job, age);
    /* super() calls the parent constructor, the one inheriting from, specifically the name, job, and age. this way you don't have to repeat yourself in terms of this.name, this.job... */
    this.languages = languages;
    this.busy = true; //this meets the busy by default
  }
  completeTask() {
    this.busy = false;
  }
  acceptNewTask() {
    this.busy = true;
  }
  offerNewTask() {
    if (this.busy) {
      console.log(`${this.name} can't accept and new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responisbility!`);
    }
  }
  //this will push the new languages they learn to the end of their array
  learnLanguage(newLang) {
    this.languages.push(newLang);
  }
  listLanguages() {
    return this.languages;
  }
}

//we use new to inform the program we are making a new object using the Person blueprint... same for Programmer
const person1 = new Person("Harold", "Backend Engineer", 20);
person1.exercise(); //should run "Running is fun..."
person1.fetchJob(); //should run "Harold is a backend..."

const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, [("HTML", "CSS", "JS", "R")]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");

console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());

//test for the methods below on programmer1
c1.offerNewTask();
c1.completeTask();
c1.offerNewTask();

console.log(c1);
console.log(c2);
console.log(c3);
