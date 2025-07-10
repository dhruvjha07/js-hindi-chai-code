// Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date (2023, 0, 23)
// let myCreatedDate1 = new Date (2023, 0, 23, 2, 1)
let myCreatedDate1 = new Date ("01-14-2023")

console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth());

newDate.toLocaleString('default' , {
    weekday: "long"
   
})

