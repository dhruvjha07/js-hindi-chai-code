// arrays


const myArr = [0, 1, 2, 3, 4, 5, 6]
// console.log(myArr[1]);

// const myArr2 = new Array(1, 2, 3, 4, 5, 6)
// console.log(myArr[1])

// array methods 

// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr2.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);

// slice , splice


console.log("A" , myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);