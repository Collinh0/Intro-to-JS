/*
expressions that evaluate to true/false
expression->combination of data & symbols called operators
evaluation -> executing the expression to a constant expression
*/
1; //comparison operators - compare equality of values/data types
/*
    strict equality operator (===)

    compares values and data types*/
console.log(1 + 1);
console.log(2 === 2);
console.log(2 === "2");

/* strict inequality operator (!==)

checks if the values plus data typeis not equal

*/
console.log(2 !== 3);

/*
loose equality (==) & inequality (!=) operator
compares values only
*/
console.log(2 == "2");
console.log(2 != "3");

//2. Logical operators

//a. NOT/bang operator (!) returns the opposite
console.log(!true);
console.log(!false);

//b. Double bang operator -> allows you to convert other dat types to boolean
//it's a short cut to a boolean constructer
console.log(Boolean())
console.log(!!"")
console.log(1 + (2 * 3))
//coersion -> converts one data type to another
console.log("jane + ``" + "Doe" + 2 + 1 + 1)
  console.log(1 + "2jane")

//c. AND (&&) and the OR (||) -> double pipes - they allow combining of boolean expressions
console.log(2 === 2 && 2 == "3"
    console.log(2 === 2 && (2 == "3" || 3 ==3))
)
  

//3. Number operators; less than,greater than,less than or equal to
console.log(50 > 34)
console.log(34 >= 34)



// Statements + execution sequence