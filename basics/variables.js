const UserId = 101;
let Usermail = "anjan@gmail.com"
let UserPassword = "1234687"
let isfollow;

// UserId = 201; not Allowed  
// console.log(UserName);

/*don't use var for declaring variables 
  because of issue in block scope and 
  functional scope
*/

console.table([UserId, Usermail, UserPassword, isfollow])




//+++++++++++++++ VAR ++++++++++++++++++++++++

//var are function-scoped or globally-scoped. 

//This means they are accessible throughout the entire function in which they are declared, 
// or globally if declared outside of any function.

var y = 77
console.log(y)

y = 78
console.log(y)


//+++++++++++++++ LET +++++++++++++++++++

//block-scoped, meaning they are only accessible within the block.{}

//let variables can be reassigned but cannot be re-declared within the same block scope. cannot redeclare 
// like "let mynum", after declaring the variable

let  mynum = 33;
console.log(mynum)

mynum = 44;
console.log(mynum)



//+++++++++++++++++++++++++ CONST +++++++++++++++++++++++++

// const are also block-scoped, similar to let. {}

//const variables cannot be reassigned after their initial assignment

const x = 55
console.log(x)

// x = 77   Here showing error
// console.log(x)



