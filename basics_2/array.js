const myArry = [0, 1, 2, 3, 4, 5];// this is array and 0, 1, 2, 3 are elements of the array 


//Different Way to Declare the Array
const newArr = new Array(1, 2, 3, 4 )// here in this way we doesnot used [] boxes for array decclaration
// console.log(newArr [2]);

//***********************  ARRAY METHODS *****************************

// myArry.push(8); //this push methods actually add element to the array at the end of the array
// console.log(myArry);

// myArry.pop(); //in this POP method its work is remove last element from the array 
// console.log(myArry);

// myArry.unshift(99);// this unshift method actually add element in the very 1st position of the Array. 
//                     //so that this method basically changed original index values of an array. 
//                     // for small array its nothing problem but problem came out huge number of data  
// console.log(myArry);


// myArry.shift(); // this method just remove very 1st element of an array
// console.log(myArry);



// console.log(myArry.includes(1));// in this method index ma send gareko number cha ki xaina vanera find out garcha

// console.log(myArry.indexOf(3));


// const newarry = myArry.join();// join method le bind gardincha array and string ma convert gar dincha 

// console.log(myArry);
// console.log(newarry);
// console.log(typeof newarry);



//*********************  Slice and Splice ************************

// console.log("A", myArry);

// const arry =  myArry.slice(1,4)
// console.log("B", myArry)
// console.log(arry)


// //splice method manupulate the original array 
// const arry2 = myArry.splice(1,4)
// console.log("C", myArry)
// console.log(arry2)




const actor = ["SRK", "SK", "AK", "RR", "NTR"]
let actress = ["Rani", "Karina", "Priyanka", "Katrina", "Preety"];


//*****************************     PUSH   *************************** 

// actor.push(actress)
// console.log(actor)
// console.log(actor[5][2]) 

//Push gare vane exitsting array mai add voi dincha new array create hunna



//*************************       CONCAT    **************************
// let actressAll  = actress.concat(actor);
// console.log(actressAll)
// console.log(actress)

//concat method le New Array RETURN garcha, main array lai kei ni garedna 



// **********************      SPREAD OPERATOR  *******************************
// const allActress = [...actor, ...actress]
// console.log(allActress)

// DUITA ARRAY LAI MERGE GRANI BELA SPREAD OPERATOR USE GAREKO RAMRO HUNCHA INSTEAD OF PUSH METHOD AND CONCAT METHOD
//ALTHOGH USE GARNCHA push AND concat BUT MOSTLY CODE HORU MA SPREAD OPERATOR USE HUNCHA 



// ************************* FLAT ******************************

const realNum = [1, 2, 3, [4, 5], 9, 6, 7, [8,[33,43,55],],[4,48,[99]]]



const realDnum = realNum.flat(1);
console.log(realDnum); 

const realsNum = realNum.flat(Infinity)
// console.log(realsNum)

// ARRAY KO VITRO ARRAY CHA VANE ANI TESLAI SINGLE ARRAY CONVERT GARNI HO VANE WE CAN USED FLAT METHOD


//************************  ISARRAY  ********************************

//isarray means asking question 

// console.log(Array.isArray(actor));
// console.log(Array.isArray('Anjan'))

// ********************* FROM ******************************
// console.log(Array.from('Anjan')) //form le convert gareko cha string lai array ma 



let name = "Shankar Dev Vidya Niketan"

// console.log(Array.isArray(name))
// console.log(Array.from(name))

let nam = Array.from(name)
// console.log(nam);

// console.log(Array.isArray(nam))




