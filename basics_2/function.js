//Declare and Excuation of  Function 

function printing (){   //when defining the function () called parameters
    console.log("hellow world");
    console.log("hellow world");
    console.log("hellow world");
    console.log("hellow world");
    console.log("hellow world");
}

//printing() // when function calling and then () called arguments


function addingNumbers (num1, num2){
    console.log(num1 + num2)
}

// addingNumbers(200, 333)

addingNumbers(888, 2)

//in Js we can using a new variable to store Function execution 

const add = addingNumbers(200, 333)
// console.log(add) 
//the output says undefined

// Multiplicity 

function MulNum (nums1, nums2){
    let multi = (nums1 * nums2)
    return multi
}


const multi = MulNum(20, 3)
console.log(multi);

// Kunai Value lai RETURN Gareko cha vane matra VARIABLE ma store garna milcha
// CONSOLE.LOG gare vane hunna.
// Return gareko pachi function call garni bela call matrai gare vane Value DISPLAY HUnna



function systmLogin (username){
    if(!username){
        console.log("put your ass off")
        return
    }
    return `Hello...!!${username}, You are loggedIn Just`
}

console.log(systmLogin())
