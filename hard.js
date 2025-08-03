"use strict";
console.log("BEGINNING OF HARD");

//make the patients/clients function for name and ssn
function createClient(name, ssn) {
  /* now im going to return the name which will be able to be accessed by anyone because it is in the outer function which is public */
  return {
    name: name, //using colins because we are defining the object and these are key value pairs
    getName: function () {
      return name;
    },
    //now I will create the inner function which will be private
    getSSN: function () {
      return ssn;
    },
  };
}
//now i'll create the object, which is the result of the function, using the GI's example

const client1 = createClient("John", "123-45-6789");

//.name is able to pull John because it is in the public funciton/ outer function
console.log(client1.name);

/*the ssn is not able to be pulled because it was stored in a closure and is unaccessable to the outer function, will result in undefined */
console.log(client1.ssn);

console.log(client1.getName());

//this is the only way to access SNN because it is the inner function
console.log(client1.getSSN());
