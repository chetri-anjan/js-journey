
//+++++++++++++++++++++ FOR OF LOOP ++++++++++++++++++++++++++

const myArry = ['Shaktima', 'Junior G', 'Hattori', 'Motu Patlu']


for (const arr of myArry) {
    
    // console.log(`Arr of Myarry is: ${arr}`)
}




const greetings = 'Hello World!'

for (const greet of greetings) {

    if(greet == ' '){
        // console.log(`space is detected`);
        continue;
    }
    // console.log(` each character: ${greet}`)
}

const users ={
    fullname: "Gali Diva",
    actress: "sexmex",
    country: "Latina",
    category: "Milf",
    size: "fatass"
}

for (const [, values] of users) {
        console.log(key, values)
}