// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// Function create gareko immediately nai execute gareko lai IIFE vancha  

//Global Scope le polution create garcha function horu ma some time, 
// ani atleast yo function ma pollute nahaus vanera iife Used garincha

// OR global scope ko variable or junsukai declaration cha global scope ma
// tesko pollution lai remove garna lai IIFE use garincha



// function coffee(){
//     console.log(`DB Connected`)
// }
// coffee()


//++++++++++++++++++++  IIFE  +++++++++++

//  So Function lai rap garcha () yesma ani execute ni gardin cha tespachi using this ()

//Below Example 

//Named IIFE
(function coffee(){
    console.log(`DB Connected`)
})();



//UnNamed IIFE

(() => {
    console.log(`DB Second Connected`)
})();


//console.log le variable expecte garcha vane yesari ni parametter pass garcha 
//parameter pass garni IIFE


((username)=>{
    console.log(`Welcome back to the Database!!, ${username}`)
})("anjan")



//duita IIFE lekhni vaye vane after execution 1st IIFE ; add garera end garna parcha execution lai natra error aauncha


