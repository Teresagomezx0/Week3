"use strict";

//first I need to make a funciton that will divide slices by the number of people
function sharePizza(slices, people) {
  //then the actual math where slices gets divided by people
  let amount = slices / people;

  //now for the interpolated message, which just means a message which we can plug variables directly into the sentence
  //the .toFixed method allows us to have a decimal to exactly to spots
  return `Each person gets ${amount.toFixed(
    2
  )} slices of pizza; from our ${slices} slice pizza`;
}

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));
