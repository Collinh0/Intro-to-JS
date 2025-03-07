/**
 * Functions - piece of code thata allows reusability
 * D.R.Y -> Do not Repeat Yourself
 * 
 * can accept one or more parameters separated by commas
 * 
 * Parameter -> variables listed in the paranthsis of functions
 * Arguments -> Values that are passed when calling/invoking a function
 * 
 * in order for declared
 */

//syntax
function functionName() {
    //function body
}

console.log('good morning Arif')
console.log('good morning,Jeff')

console.log(1 + 1)
console.log(345 + 783)

//function declaration
function greeting(name) {
    console.log("good morning" + name)
}

//call/execute
greeting("Robert")
greeting("Collins")
greeting(Edna)

function sum(x, y) {
    console.log(x + y)
}

//we cannot redeclare
//last name = 'new name'

function sum(x = 2, y = 3) {
    console.log(x + y)
}

sum()
sum(2, 2)
sum( '', 10)
console.log(sum(1, 1))

//our function doesnt have an output even though there is some logic
//we always going to get undefined
//if we want to get an output, we introduce the return keyword

function greetings(firstName, lastName) {
    return `goodmorning ${firstName} ${lastName}`
}

console.log(greetings()) //a function is justa complex expression




