// This key word actually means current context.



const users = {
    username: "anjan",

    password: 12345,

    price: 999,

    welcomeMsg: function (){
        console.log(`${this.username}, Welcome to the Dashboard`)

        console.log(this)// this current value or context lai reffer gar cha below current changed vako cha so value ni changed vako cha 
    }
}

// In this OBJ we can see for console.log using this keyword which reffer to USERS OBJ
// This USERS OBJ is current context for now 


// users.welcomeMsg()

// users.username = "Mia Khalifa"

// users.welcomeMsg() //hiya value changed to Mia Khalifa vayo 'cause mathi Function define 
// garnibela hamile hardcore tarikale define gareko thiyena we used current context lai use garera define gareko thiye


//++++++++++ NODE MA THIS PRINT GARE VANE +++++++++++++++

            //console.log(this)

// yesko output EMPTY OBJ aauncha 'cause hamile aaile use gareko vaneko NODE ho
// so, NODE ma aaile globally kei ni context xaina that why getting empty OBJ 


//+++++++++ BROWSER MA THIS PRINT GARE VANE++++++++++++++++++++++++++

// BUT when we print THIS in Browser we get WINDOW Global 'Cause 
// pahila pahila browser mai JS use garna milthiyo aru kunai tham ma milthiyena. JS lai execute garni ENGINE thiye 
// only Browser ko vitra matrai thiyo TARA aaile different different way cha JS ko Engine lai Acess garnalai  like NODE, BON, etc

 
function coffee(){
    // const actress= "sara jay"
    console.log(this.username)
}

// coffee()

// Function ko vitro this. use garna mildena. Mathi OBJ vayera matrai this. use garna mileko ho
// Also won't use this. username in the Arrow Function
function rock(){
    let username= "anjan"
    console.log(this)
}

// rock()// Normal way ko declaration of FUNCTION ma this ko value print Global ra aru things horu huncha


const rocks = () =>{
    let username= "anjan"
    console.log(this.username)
}

//rocks()// Arrow function ma {} Empty OBJ print huncha 



// Basic Arrow Function 

()=>{

}

//varibale ma ni hold garn chakincha arrow fn lai

// ++++++++++++++ EXPLICIT RETURN ++++++++++++++++

// Here, We using Return KeyWord 

// const addNum = (num1, num2)=>{
//     return num1 + num2
// }



//+++++++ IMPLICIT RETURN +++++++

//HERE, We won't need {} and return key word 

// const addNum = (num1, num2)=>  num1 + num2

//if got confused then use this another way below 
// Using () we didn't need return key word but if we using 
// {} we need to use Return key word. Refer Above addNUm 

const addNum = (num1, num2) =>  (num1 + num2) // Most of the time using this in the REACT.JS during FUNCTION Decleration 
console.log(addNum(2, 5))

// if we want to pass the OBJ here we () and then {} so like this ({})

const naming = () => ({username: "Gali Diva"})
console.log(naming())

