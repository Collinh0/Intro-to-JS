/*

-Variables
-Data types: they allow us to represent real world data in a programming language.

1. Primitive: string,number,boolean,undefined,null.
2. non-primitive: objects,arrays.

use the typeof to verify the type of data */
console.log(typeof firstname);

//1. strings- represent texts,paragraph
const firstname = "Jane"; // double quotes
const lastname = "Doe"; //single quote
const fullname = `Jane Doe`; // backticks [sidenote:ziko below esc key]
const studentName = "Johnson`s"; //use single or double quotes when ther is an apostrophe
//string concatetion using the + operator

//string interpolation :injecting values into strings - we must use the backticks
console.log(`Jane${lastname}; age is ${2025 - 2000}`)


//BODMAS -> PEMDAS (Parentheses, Exponents, Division,Multiplication, Addition, and Subtraction)

//curly brackets -> {}
//paranthesis (soft brackets) -> ()
//square brackets -> []

// 2. numbers -> whole numbers, decimals, negative
console.log(typeof 3)  //sidenote-> supposed to show it's a number but quokka isn't responding

//3. boolean -> true/false
console.log(true)
 
//4. objects -> collection of related data cosisting of key,value pairs separated
// comma - we use curly brackets
const student = {
    name: "collins",
    class: "sd-ft13",
    age: "23",
    isHardworking: "false"
}

//5. arrays -> list of values enclosed using the square brackets
const students = ['collins', 'Ruthy', 'Kimani']
const scores = ['26', '31', '36']
 
console.log(typeof "students") //quokka not responding again,supposed to display

//6. null -> represents an intentionally absent value
let name = null
console.log(name)  //quokka not responding again

//7.undefined -> not assigned to any value
 
    

