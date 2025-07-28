// This key word actually means current context.



const users = {
    username: "anjan",

    password: 12345,

    price: 999,

    welcomeMsg: function (){
        console.log(`${this.username}, Welcome to the Dashboard`)

        console.log(this)
    }
}

// In this OBJ we can see for console.log using this keyword which reffer to USERS OBJ
// This USERS OBJ is current context for now 


users.welcomeMsg()

users.username = "Mia Khalifa"

users.welcomeMsg() //hiya value changed to Mia Khalifa vayo 'cause mathi Function define 
// garnibela hamile hardcore tarikale define gareko thiyena we used current context lai use garera define gareko thiye


// console.log(this)