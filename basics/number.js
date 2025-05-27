  //+++++++++++++++++ Math in JS++++++++++++

  // console.log(Math);

  // console.log(Math.abs(-4)); // absulate value {It basically -ve number get +ve number as a result but +ve number remains as same }
  // console.log(Math.round(4.6))

  // console.log(Math.random())
  // (It gives us numbers inbetween 0 and 1 like 0.1, 0.2, 0.9)

  // console.log(Math.random()*10)
  // (Here we multiply by 10 for shifting the the numbers from . But in this 
  //   case We get 0.1, 0.2 or kind of output
  // )

    // console.log(Math.floor(Math.random()*10))
//     (Here we used Math.floor() which gives us output as number 0 for
// avoiding 0 in some cases we add 1 so that minimun num we get 1 
// not less than 1. 
//   )



const min_val = 10;
const max_val = 20;

console.log( Math.floor(Math.random() * (max_val - min_val +1) +min_val))
// (In here min val and max val when it using
//   everything process is same only things that instead of using * 10 we using
//   max value - min value. and at the end adding min val bcz we actually need atleast 
//   numbers are strat from min value
// )

