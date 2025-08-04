
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


//+++++++++++++++++++++++++++++ MAP +++++++++++++++++++++++++

// MAP is a BJECT

//declaration of MAP
// Map le Unique Value hold garcha ani jun order ma rakhincha tei order mai bascha changed hudaina

// const map = new Map() 
// map.set('INR', "India")
// map.set('NP', "Nepal")
// map.set ('FR', 'France')

// console.log(map);

// [key, value] yesari gare vane array form ma aauna natra value matrai or key matrai print gare vane 
// array ko form ma aauncha. ani yesari gare vane array lai de structring gare huncha so easily chuttauna milcha

// for (const [key, value] of map) {
//     // console.log(key,'=>', value )
// }



// +++++++++++++ OBJECT++++++++++++++++

// const users ={
//     fullname: "Gali Diva",
//     actress: "sexmex",
//     country: "Latina",
//     category: "Milf",
//     size: "fatass"
// }

// For of loop using here
// for (const [values] of users) {
//         // console.log(key, values)
// }

// Yo Log ma Error aauncha
// OBJECT lai iterate garna lai FOR OF loop le hunna Gara huncha 



// ++++++++++++++++++++++ FOR IN LOOP  OBJECT +++++++++++++++
const users ={
    fullname: "Gali Diva",
    actress: "sexmex",
    country: "Latina",
    category: "Milf",
    size: "fatass"
}

for (const key in users) {
    // console.log(key)
    // console.log(users[key])

    // console.log(`${key} :- ${users[key]}`);
    
}

// ++++++++++++++++++ ARRAY ++++++++++++++

const myHeros = ['Shaktima', 'Junior G', 'Hattori', 'Motu Patlu', 'Spiderman']

for (const key in myHeros) {
    // console.log(myHeros[key]) //array ko index value lai print gareko cha 0, 1, 2,3...

}



// const map = new Map() 
// map.set('INR', "India")
// map.set('NP', "Nepal")
// map.set ('FR', 'France')

// for (const key in map) {
//     console.log(key);
    
// }

// MPA lai OBJECT vane pani For in loop lagauna mildena.

// MAP ma for in loop use garn mildena kina ki map ma iteration garni kura hunna 





//+++++++++++++++++++++++ FOR EACH LOOP +++++++++++++++++

const coding = ["java", "python", "php", "C# ", "jS" ]

coding.forEach( function (value) {
    // console.log(value)

})

// so array ma for each launi bela arry.forEach ani () vitra call back function that meaning
// normal function but name hunna only FUNCTION key word huncha ani tyo parameter lai ke vanni ho j nam rakhe ni huncha


function printme (item){
    console.log(item)
}

// Function lai pani as a parameter pass garna sakincha FOR EACH ma. function nalekhikinai kunai arkoi tham ma vako FN lai ni
// as peramete way ma pass gara sakincha for each ma

coding.forEach( printme)



