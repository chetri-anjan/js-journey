//OBJ are declare by Literal and Constructor 

//----------------Singleton simple------------------
// Constructor bato OBJ bane vane Singleton huncha
//Literal bato OBJ bane vane Singleton hunna (INTERVIEW PREP)

//+++++++++++++++++++++  Using SYMBOL in the OBJ+++++++++++++++++++++++

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

// console.log(user.name) //normal way to ge the values of the OBJ

// console.log(user["name"]) // Recommendate way to get the VALUES of the OBJ

// console.log(typeof user[mysmbl])

// if we want to add SYMBOL inside the OBJECT it should adding in the [] 




// How to Change the value of a object that key have

// Simply, 
user.name = "Robina"

//console.log(user["name"])
// console.log(user)



//how to freeze the value in a obj, Simply

Object.freeze(user);

user.name = "Sunny"

// console.log(user)




//+++++++++++++ how to create singaltone ++++++++++++++++++++++

// Singaltone Object Declaration

const Khalti = new Object() // Singaltone Obj

const Khalti2 = {} // this is also obj declaration but it is none singaltone OBJ

// console.log(Khalti);
// console.log(Khalti2);

//Adding value to the empty OBJ

Khalti2.username = "Mia Khalifa"
Khalti2.email = "miakhalifa@gmail.com"
Khalti2.isLoggedin = false

// console.log(Khalti2);


const adminUser = {
    role : "Administrative",
    username: {
        userFullName: {
            firstName: "Danny",
            lastName: "Denniles"
        }
    }
}

// console.log(adminUser.username.userFullName.lastName);




//+++++++++ OBJ MERGE with multiple OBJ +++++++++++++++

const obj1 = {1: "a", 2:"b", 3:"c"}
const obj2 = {1: "d", 2:"e", 3:"f"}
const obj = {1: "d", 2:"e", 3:"f", 4:"I"}

// const obj3 = {obj1, obj2}  Wrong Way

const obj3 = Object.assign({}, obj1, obj2) //here, the empthy {} is target which denoted 
//the OBJ, and  obj1 and obj2 are source

//Using SPREAD Operator

const obj5 = {...obj, ...obj1, ...obj2} // Most of the time using this way to Merge two OBJECT
console.log(obj5)



