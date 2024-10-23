// function myFunction(msg) {
//     console.log(msg)
// }

// myFunction("jay shree ram");

/*function sum(x, y) {
    console.log(x + y)
}

sum(5, 2);*/


// const myFunction = (a, b) => {
//     console.log(a + b);
// }

// console.log(myFunction);

// const mul = (x, y) => {
//     console.log(x * y)
// }

// console.log(mul);


// Practice set //

/*function countVowels(str) {
    let count = 0;
    for (const char of str) {
        console.log(char);
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }

    }
    console.log(count);
}
 
console.log(coluntVowels("abc"));*/

/*let nums = [1, 2, 3, 4, 5, 6];

nums.forEach((num) => {
   console.log(num * num * num * num); 
})*/

/*let nums = [1, 2, 3, 84, 22, 54, 76, 768];

let newArray = nums.map((val) => {
    return val;
});

let calcSquare = (num) => {
    console.log(num * num)
};

nums.forEach(calcSquare)*/

/*let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
})*/

/*let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    return val % 2 !== 0;
})*/

/*let arr = [1, 2, 3, 4];

const outPut = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(outPut);*/

/*let arr = [4, 525, 8582, 2, 5, 9, 33, 24, 242];

const outPut = arr.reduce((res, curr) => {
    return res > curr ? res : curr;
})

console.log(outPut)*/

/*let stdMarks = [85, 78, 45, 90, 89, 92, 64, 94, 93];

const outPut = stdMarks.filter((val) => {
    return val > 90;
})

console.log(outPut);*/

/*let n = prompt("Enter a number :");

let arr = [];

for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
})

console.log("sum =", sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
})

console.log("factorial =", factorial);*/

/*let sums = [23, 42, 12, 68];

sums.forEach((num) => {
    console.log(num * num)
})*/

let sums = [25, 35, 45, 55];

let calcSquare = ((num) => {
    console.log(num*num)
})

sums.forEach(calcSquare)

