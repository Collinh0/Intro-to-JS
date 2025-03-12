/**
 * scope -> mostly comes into play when dealing with variables
 * global scope and local scope
 * when yiyu introduce things liuke functions, if/switch/while and many other statements
 * with a body ,they create a local scope
 *
 * */

let firstName = "Collo";

//in this fn, a local scope is created where we are able to even reuse variable names that are already used in global scope

function lunch(firstName) {
  //when dealing with parameters,js auto assigns them the let keyword,which means we can reassign but not redeclare the same variable insi8de the fn
  console.log(firstName);
  firstName = "Mufasa";
  if (true) {
    //var doesnt respect the scope principle which means it exposes local variables tom the outer scope
    var lastName = "Kuria";
    console.log(lastname);
  }

  //we can be able to acces global variables inside local scopes
  // variables inside the local scope
}
