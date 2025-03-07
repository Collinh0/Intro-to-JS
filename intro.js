//console allows us to print out values
console.log((2 + 2))
// single line comment

/**
 *  multiline comment
 */
/* 
when naming variables 
 use cameLCase naming convention
 JS is case sensitive
 do not start variable names with numbes always use a lower case letter
 as a rule of thumb use const or let to create variables,there is also var keyword but we do not use it

*/
console.log('hello world')
/* 
expression
1 constant
2 assignment
3 look up
 */
// a variable is just a container to store values for later

name = 'Richard Ngeny'

//look mup expressikon
console.log(name)

num = 3 + 6
console.log(num)

//let keyword
// let allowa reassigning of words
//it does not allow redeclaring

let age;
age = 21
console.log(age)

//reassignment - giving a different value to the same variable

//let age = 45

//continuatiopn from functions.js [line 34]

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
//if we mee

