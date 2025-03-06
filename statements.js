/* Statements

Default sequence/execution order -> left to right,top to bottom.

selection -> we can choose to run  certain codes and not others
Repetion -> we  can choose to run  certain codes until condition is met

*/
//selection using if

const age = 17
cont nationality = "Ugandan"

//the first part of the if condition only checks for truthiness
if (age >= 18 && nationality === "Kenyan") {
    console.log("you can vote")
} else { //the else part allows us to account for falsiness
    console.log(you cannot vote)
}

//multiple conditions
const fruit = "apple"
if (fruit === "apple") {
    console.log("placed in apple basket")
} else if (fruit === "mango") {
    console.log("placed in mango basket")
} else if (fruit === "banana") {
    console.log("placed in banana basket")
} else {
    console.log(`we do not have a basket for ${fruit}`)
}

//selection using switch -> this is na assignment

//repetition using while loop

//natural terminating loop

let count = 0;

while (count < 5) {
    console.log(`count ${count}`)
    //terminating condition
    //count = count + 1
}

console.log(count)

//do/while - always runs at least once
let countTwo = 6

do {
    console.log(`count ${countTwo}`)
    countTwo++
} while (countTwo)
   

console.log("execution is still happening")

