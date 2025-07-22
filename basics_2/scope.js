// { } this is called scope 

// Example: 

// if(true){
// console.log("hellow world")
// }


if(true){
var a = 500
}

//console.log(a) // it showing the result 'cause Var is global scope 


if(true){
    let b = 800;
}

//console.log(b) //getting error 'cause let is block scope


function one(){

    const username = "VS Code Editor"
    
    function two(){

        const name = "Asus"
        const socialMedia = "Instragram"

        console.log(username)// Getting name as mentioned in the result 'cause username is the global variable here in this case 
    }

    //console.log(socialMedia)

//   two() 
    
}

one()

//inner scope can access global value but 
// inner scope value cannot access by the global value

// ++++++++++++++++++ IMprTant ++++++++++++++++++++++

// This is the simple way to declare the function. In this way to declear function 
// we can console before declaration it won't get any error

console.log(add(7))

function add(value){
    return value + 1

}


// In this way to declare FUNCTION is called EXPRESSION 
// (here, simply variable hold the  )


const num = function subtract(value){
    return value - 2
}
console.log(num(8))// using expression we cannot print the value before declaration


