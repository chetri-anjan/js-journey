// const coding = ["java", "python", "php", "C# ", "jS" ]

// const myCoding = coding.forEach( (item) => {
//     console.log(item)

//     return item
// })
// console.log(myCoding)



// Yesko Output undefined aauncha so One thing clear that FOR EACH le value return nagarni raicha, tara return garuna milcha but tesko way below explain.
// for Easily return value we can use FILTER



//+++++++++++++++++++ FILTER ++++++++++++++++++++++++++++

// Filter means;  value true vaye matra kam garcha.


// below if using val < -5  it shows a empty array []. So yo true vayena condition

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newsNums = numbers.filter( (val) => val < 5 
) // here we using one liner arrow function 

// console.log(newsNums);


// this is the basic way to writing filter. 
// Filter ko vitro aauta call back function aauncha ani tespachi a aauta condition aauncha 
// Conditin meeet vako horu le kam garcha 




const newNums = numbers.filter( (item) => {

return item > 5
   
})

// console.log(newNums);

// Filter ma Scope use gare vane we should using return key word use garna parcha condition sanggai 

// Without Return use gare vane empty array aauncha output ma []


//++++++++++++++++++++++++ Foreach also give return value ++++++++++++++++++++

// If we using foreach for this return value for an array

const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newMyNum  = []

mynum.forEach( (num) => {

    if(num > 5)
    {
        newMyNum.push(num)
    }
})


// console.log(newMyNum);


//++++++++++++++++++  Array in obj ++++++++++++++++++++++++++++

const books = [
  {
    title: "The Silent Forest",
    authors: ["Lena Hart", "Tom Gray"],
    publishYear: 2008,
    edition: "First",
    genre: ["Mystery", "Thriller"]
  },
  {
    title: "Beyond the Stars",
    authors: ["Clara Moon"],
    publishYear: 2015,
    edition: "Second",
    genre: ["Science Fiction"]
  },
  {
    title: "Whispers of the Wind",
    authors: ["James Hill", "Sara Lane"],
    publishYear: 2011,
    edition: "Revised",
    genre: ["Romance", "Drama"]
  },
  {
    title: "Echoes of Time",
    authors: ["Nina Vale"],
    publishYear: 2019,
    edition: "Third",
    genre: ["Historical Fiction"]
  },
  {
    title: "Rise of the Phoenix",
    authors: ["Omar Reed"],
    publishYear: 2020,
    edition: "First",
    genre: ["Fantasy", "Action"]
  },
  {
    title: "Digital Dreams",
    authors: ["Kyle Trent", "Maya Lee"],
    publishYear: 2022,
    edition: "Deluxe",
    genre: ["Cyberpunk", "Tech Thriller"]
  },
  {
    title: "The Last Kingdom",
    authors: ["Brianna Snow"],
    publishYear: 2016,
    edition: "Second",
    genre: ["Fantasy", "Epic"]
  },
  {
    title: "Mind Over Matter",
    authors: ["Ethan Clarke"],
    publishYear: 2018,
    edition: "First",
    genre: ["Self-Help", "Psychology"]
  },
  {
    title: "The Forgotten Code",
    authors: ["Liam Cole"],
    publishYear: 2021,
    edition: "First",
    genre: ["Tech Thriller"]
  },
  {
    title: "Ocean of Secrets",
    authors: ["Sophia Green", "Daniel Ross"],
    publishYear: 2013,
    edition: "Revised",
    genre: ["Adventure"]
  }
];


// let newBooks = books.map( (bk) => bk.publishYear)


// MAP pani same ho scope strat gare vane return keyword should be written


let newBooks = books.filter( (bk) =>{
    return bk.publishYear > 2015 
})

// console.log(newBooks)


// const hernum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// hernum.forEach((num) =>{
//   if(num === 5){
//     console.log(`5 is ditected so don't print it`);
//     continue
//   }

  // WHY NOT USING CONTINUE AND BREAK INSIDE THE FOREACH ?

  // continue and break are only allowed in traditional loop constructs like:
  // For, While, Do While Loops

  //But forEach() is a higher-order function that takes a callback — and continue has no meaning inside a callback function, 
  // so JavaScript throws a syntax error.

  // console.log(num + 10)
//})



// ++++++++++++++++++ CHAINING ++++++++++++++++++

// two or three methods directly using is possible is called Chaining. method like map() filter()


// const hisnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newHisNum = hisnum
//                   .map((num) => num * 10)
//                   .map((num) => num - 1 )
//                   .filter((num) => num > 30)



// console.log(newHisNum);




// ++++++++++++++++++++++++++ REDUCE +++++++++++++++++++++++++++

// Reduce ni aauta method ho


// duita parameter passs huncha accumilator and initialValue vanera, initialValue vaneko array ko 1st value. But accumilatro didn't 
//know about where to start so that's we using accumilator value as 0 otherwise it take initalvalue 1st value as accumilator value


// Easily add garni bela REDUCE GARNA PARCHA 

let mynumber = [1, 2, 3]

let initial = 0;

const newsMyNum = mynumber.reduce(( accumilator , initialVal) => {
  console.log(`accumilator: ${accumilator} and initialVal: ${initialVal}`)
   const result = accumilator + initialVal
   return result
}, initial)

console.log(newsMyNum)