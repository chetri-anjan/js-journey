//"use strict" // trate all JS code as newer version

//alert ("hello moto") //we are using Nodejs not browser


//Premitive Data Type

/*
number => 2 to power 53
bigInt 
string
boolean=> true/false
null => standalone value
undefined => 
symbol => unique
*/

/* Non Premitive Data Types are 
Object
Array 
function 
*/



//+++++++++++++++++++++ Memory in JS ++++++++++++++++++++++

//Stack
//Heap

//when define memory in the stcak it gives a copy a varibales value
//EX. of Stack
            // let studentName = "Ronak Thapa"
            // let chanagedName = studentName

            // chanagedName = "Anjana Pun"

            // console.log(studentName);

            // console.log(chanagedName);



//when define memory in the Heap it gives a reference (simply it ain't give us a copy of variables), 
// so if we changed any values in the (like obj, arr or fn) it directly affect to the root or main variables (obj, arr or fn)

                //Ex. of Heap

                            // let studentInfo= {
                            //     name: "ranjana",
                            //     email: "ranjana@gmail.com",
                            //     address: "Pokhara"
                            // }

                            // let changedStudentInfo=  studentInfo;

                            // changedStudentInfo.name = "Rajan";
                            // changedStudentInfo.email = "rajan@yahoo.com"

                            // console.log(studentInfo);

                            // console.log(changedStudentInfo);



let const1 = "When-using-bracket notation for character-access"

//for concat
                // console.log(( 'I love Js ').concat(const1))

                // console.log( const1.concat(' I love Js '))


                // console.log(( 'I love Js ').concat(const1))


// console.log(const1.includes('When'))



//usin template litreal with include method

            // const sentence = "The quick brown fox jumps over the lazy dog.";

            // const word = "man";

            // console.log(
            // `The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`,
            // );

            // console.log(`the word ${word} ${sentence.includes(word)? "is": "isn't"} in the sentence`)