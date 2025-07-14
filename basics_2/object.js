//OBJ are declare by Literal and Constructor 

//----------------Singleton simple------------------
// Constructor bato OBJ bane vane Singleton huncha
//Literal bato OBJ bane vane Singleton hunna (INTERVIEW PREP)

//+++++++++++++++++++++  Using SYMBOL in the OBJ++++++++++++

const mysmbl = Symbol("key1") 

//++++++++++++++++++++++ OBJECT LITERAL+++++++++++++++
const user = {
    name: "Anjan",
    age : 36,
    email: "google@MediaList.com",
    isLoggedin: "true",
    LastPurchase: ["monday, wednasday"]

}

console.log(user.name) //normal way to ge the values of the OBJ

console.log(user["name"]) // Recommendate way to get the VALUES of the OBJ


