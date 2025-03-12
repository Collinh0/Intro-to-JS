//callback functions
function greeting(name) {
  return `Good evening, ${name}`;
}

const name = "Rahma";
console.log(greeting(name));

//First-class, js allows us to treat functions like other values
const eveningGreetings = function() {
  return `Good evening`;
};
const sum = function (a, b) {
    return a + b
}

//functions -> pieces of code thata allow reusability,we can exexcute fns elsewhere in our progra

//call/invoking it using the function name followed by arguments inside the paranthesis

function sum(f, g) {
  return f + g
}
//console.log(sum())


const perimeter = function (l, w) {
  return l*2 + w*2
}
console.log(perimeter(4, 5))


//fns are 1st class citizen meaning we can treat them like any other values
//since it's a fn,the rules of fns must still be applied
//now this become a fn expression (fn assigned to variables)
//the fn expression can work without fn names i.e anonaymous fns

//fns expressions dont allow hoiusting since fn is stored inside a variable

const newVariable = 9
//we can  only acces a variable after declaring it -> this is in relation to fn expressions
console.log(newVariable)

function calculator(z, a, c) {
  //console.log(c(7, 5))
  return c(z, a)
  //console.log(x)
  return z
}

const z = 8;
const output = calculator(7, 5, perimeter)

console.log(output)
