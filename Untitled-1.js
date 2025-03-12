/**
 *
 * all the rules used when creating variables,should be applid when creating function names
 */
function functionName(parameters) {
  //function body
}

//function without parameters
function morning() {
  console.log("Good morning,its Tuesday")
}

//to use a declared function,we have to call/invoke it using its name followed by arguments(optional) enclosed inside paranthesis
//call/invoke
morning()

//function with one parameter
function square(a) {
    //we3 can only have one return keyword unless we are using selection statement
    console.log(a**2)
}

//in this case,2 can be referenced as an argument(values passed into functions)
square(2)
square(3)

//function with multiple parameters
function sum(a, b) {
    console.log(typeof b)
   // if (typeof a === 'number' && typeof b === "number"){}-> incomplete(future reference)
    console.log(a, b)
    console.log(a+b)
}


//ES6 allows us to write shorter functions usingthe arrow function
/**
 * functions in JS are first-class citizens meaning they can be treated like other values
 * this brought about the ability to work with arrow functions and callback functions
 */
const name = "Barack"
const add = (a, b) => {
    return (a+b)
}
const toa = (x, y) => x - y //inserted this to mtest self

console.log(add(4, 5))
console.log(toa(9,4))

//function expression is when you assign to a variable, more often referred to as anonymous functions (the fn doesnt have a name)

const greet = function functionName() {
    return `Good evening ${name}`
}
console.log(greet())

const ageChecker = (age) => age > 18 ? "You can go out" : "stay in the kitchen!"
console.log(ageChecker(22))
console.log(ageChecker(12))

//callback functions ->functions passed to other functions as arguments and can be executed later--another file