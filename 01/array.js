// //  /*  --Array-- */
 
  
// //  const myArr = [0, 1, 2, 3, 4, 5]

// //  const myBgw = ["Radhe", "krishan"]

// // //  let myArr2 =new Array(1, 2, 3, 4)

// // //  console.log(myArr.concat(myArr2))  

// // const newArr = "Rohit buwala"

// // console.log(Array.from(newArr))

// // let score1 = 100
// // let score2 = 200
// // let score3 = 300

// // console.log(Array.of(score1, score2, score3))

// const subArray = [0, 1, 2, 3,[4, 5],[6, 7,[8, 3,[42, 22]]]]

// const newOne =subArray.flat(Infinity)

// console.log(newOne);



/*  --OBJECT-- */

const mysym =Symbol("key1")

let myInfo = {
    name : "Rohit buwla",
    semeter: "5th",
    year : "3rd",
    email : "rohit@gmail.com",
    age : "22",
    location : "ujjain",
    "branch": "It",
    "full branch": "infromation technology",
    [mysym] : "mykey1"
}
Object.freeze(myInfo)
myInfo.age = 23
myInfo.branch = "cs"

// console.log(myInfo.email);
// console.log(myInfo["name"]);
// console.log(myInfo.branch);

// console.log(myInfo["full branch"])

console.log(myInfo.age);
console.log(myInfo.branch);



