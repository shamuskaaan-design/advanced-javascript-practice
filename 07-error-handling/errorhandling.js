// Syntax Error

/* let a = 15;
console.log(a.age.name); 

//Runtime Error

function abcd(){
  let name = "Error";
  console.log(name.fullname.firstLetter);
}

abcd(); //Error will show only when we call tye method

//Logical Error

function add(a,b){
  console.log(a - b);
}

add(7,9); */

// Try & Catch in Error Handling

try {
  let a = 15;
  console.log(a.age.name);
} catch (errorinfo) {
  console.log(errorinfo);
}

console.log(
  "I will run because try and catch method handle the error and allow other code to run",
);

//Error Details

try {
  function abcd() {
    let name = "Error";
    console.log(name.fullname.firstLetter);
  }

  abcd();
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

//Finally in try catch

try {
  let a = "Daraksha";
  console.log(a.age.name);
} catch (error) {
  console.log(error);
} finally {
  console.log("I will run even if the code has an error or not");
}

// Custom Error Message

try {
  let a = "Daraksha";
  console.log(a.age.name);
} catch (error) {
  console.log(new Error("Something is not right in the code"));
}
