"use strict";
console.log("hello");
//Start of the first challenge

//this is the outer function and is nessesary to be able to return the inner function
function todaysExercise() {
  //this is the inner function which can see the outer function
  return function (exerciseName) {
    //this will be the function that returns the final message which will say the exersise for the day
    return `Today's exercise: ${exerciseName}`;
  };
}

//now im going to call the outer funtion
const exercise = todaysExercise();

//console.logs
console.log(exercise("Running"));
console.log(exercise("swimming"));
console.log(exercise("Dancing"));
console.log(exercise("Fencing"));
