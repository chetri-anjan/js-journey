//OBJ are declare by Literal and Constructor 

//----------------Singleton simple------------------
// Constructor bato OBJ bane vane Singleton huncha
//Literal bato OBJ bane vane Singleton hunna (INTERVIEW PREP)

//+++++++++++++++++++++  Using SYMBOL in the OBJ++++++++++++

const mysmbl = Symbol("key1") 

//++++++++++++++++++++++ OBJECT LITERAL+++++++++++++++
const user = {
    name: "Anjan",
    [mysmbl]: "myKey1",
            age : 36,
                email: "google@gmail.com",
                    isLoggedin: "true",
                        LastPurchase: ["monday, wednasday"]

                        }

// How to get get values

console.log(user.name) //normal way to ge the values of the OBJ

console.log(user["name"]) // Recommendate way to get the VALUES of the OBJ

console.log(typeof user[mysmbl])

// if we want to add SYMBOL inside the OBJECT it should adding in the [] 




// How to Change the value of a object that key have

// Simply, 
user.name = "Robina"

//console.log(user["name"])
// console.log(user)



//how to freeze the value in a obj, Simply

Object.freeze(user);

user.name = "Sunny"

console.log(user)
