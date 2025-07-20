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
    // console.log(num1 + num2)
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


// const multi = MulNum(20, 3)
// console.log(multi);

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

// console.log(systmLogin(""))


//+++++++++++++++++++ REST OPERATOR

//function ma kati ota arrguments horu aauncha tiyo tha vayena vane we using REST
//REST OPERATOR and (... is Rest Operator and also it is known as SPERAD OPERATOR 
//both are look same but usecases are both different)


function calculatePriceOf(...price1){
    return price1
}

// console.log(calculatePriceOf(200, 300, 900, 1050, 600))// here result displaying only 200 if without using REST Operator



//Interview Related question
function calculateCartPriceOf(price, price2, price3, ...price5){
    return price5
}

// console.log(calculateCartPriceOf(300, 400, 55, 9000, 1333, 999, 704, 650));


//Using OBJ inside the Function

const bandmember={
    bandsName: "The Edge Band", 
    memberName:"abc, dev, men, rock",
    address: "KTM",
    phone: "1231249595"
}

function rockheadband(anyobject){
    return anyobject.bandsName, anyobject.memberName, anyobject.address, anyobject.phone
}

//console.log(rockheadband(bandmember))// in this result output we only get Phone Value

//Because when using comma operator in the RETURN Statment
//The comma operator evaluates each of its operands (from left to right) 
//and returns the value of the last operand


function bandFinder(anyobject){
    console.log(`${anyobject.bandsName}, ${anyobject.memberName}, ${anyobject.address}, ${anyobject.phone}`)
}

// console.log(bandFinder(bandmember))

//Direct pass OBJ to FUN

// bandFinder({
//     bandsName: "Sabin Rai",
//     memberName: "Sabin Rais",
//     address: "Dharan",
//     phone: 121343984
// })



// Passing Arry to Function


 const myNewArray = [303, 900, 111, 999]

 function findArray(anyarray){
    return anyarray[3]
 }

 console.log(findArray(myNewArray))