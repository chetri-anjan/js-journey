let myDate = new Date()

// Date is obj

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString);
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate)

let createAtDate = new Date(2024, 1, 23)
// console.log(createAtDate.toLocaleString());


//    Date Stamp

let timeStamp = Date.now()
console.log(timeStamp);

console.log(createAtDate.getTime());

console.log(Date.now()/10000);

