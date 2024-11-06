// // // for (let index = 0; index < array.length; index++) {
// // //     const element = array[index];
    
// // // }

// // for (let i = 0; i <= 10; i++) {
// //     const element = i;

// //     if (element === 5) {
// //         //console.log('5 five is the best number')
// //     }
// //     //console.log(element)
// // }

// // for (let i = 0; i <=10; i++) {
// //     //console.log(`outer loop value : ${i}`);
// //     for (let j = 0; j <=10; j++) {
// //        // console.log(i + "*" + j + ' = ' + i*j);
        
// //     }
    
// // }
// // let myArray = ["superman", "spiderman", "iranman"]

// // //console.log(myArray.length)

// // for (let index = 0; index < myArray.length; index++) {
// //     const element = myArray[index];
// //     //console.log(element)
// // }

// // // for (let i = 0; i <=20; i++) {
// // //     if (i == 5) {
// // //         console.log(`Detected  5 is the best number ${i}`)
// // //         break
// // //     }
// // //     console.log(i)
// // // }
// // // for (let i = 0; i <=20; i++) {
// // //     if (i == 5) {
// // //         console.log(`Detected  5 is the best number ${i}`)
// // //         continue
// // //     }
// // //     console.log(i)
// // // }

// // /*+++++---- while Loop ----+++++*/

// // // while (condition) {
    
// // // }

// // // let index = 0
// // // while (index <=10) {
// // //     console.log(`value of index ${index}`)
// // //     index = index +2
// // // }

// // let myArr = ["flash", "badman", "superman"]
// //  let arr =0
// // while (arr < myArr.length) {
// //     //console.log(`value is ${myArr[arr]}`)
// //     arr =arr +1
// // }

// // // let score = 1

// // // do {
// // //     console.log(`score is ${score}`)
// // //     score =score+1
// // // } while (score <=10);


// // // let score = 100

// // // do {
// // //     console.log(`score is ${score}`)
// // //     score =score+1
// // // } while (score <=10);





// // /* ++++++----- For Off loop -----++++++*/

// // // for (const element of object) {
    
// // // }

// // const oneArr = [ 22, 23, 25, 88, 55, 221]

// // for (const num of oneArr) {
// //     //console.log(num)
// //     //console.log(`num is print ${num}`)
// // }

// // const greetings = "Hello world!"
// // for (const greet of greetings) {
// //     //console.log(`Echa char is ${greet}`)
// // }   



// // /*++++--- Map ----++++*/

// // // const map = new Map()
// // // map.set('In', "India")
// // // map.set('usa', "United States of America")
// // // map.set('Fr', "France")

// // // //console.log(map)

// // // for (const [key, value] of map) {
// // //     console.log(key, ':-' , value)
// // // }



// //             //For In loop
// // // for (const key in object) {
// // //     if (Object.prototype.hasOwnProperty.call(object, key)) {
// // //         const element = object[key];
        
// // //     }
// // // }

// // // const myObject ={ 
// // //     js : 'javaScript',
// // //     cpp : "C++",
// // //     html : "hyper text markep language",
// // //     rb : "ruby"
// // // }

// // // for (const key in myObject) {
// // //     console.log(`${key} Shortcut for -:  ${myObject[key]}`)
// // // }


// // const programming = ['js', 'py', 'cpp', 'rb', 'java']

// // for (const key in programming) {
// //     console.log(programming[key])
// // }

// // // for (const prog of programming) {
// // //     console.log(prog)
// // // }


// // array.forEach(element => {
    
// // });

// const coding = ['js', 'java', 'py', 'ruby', 'cpp']

// // coding.forEach( function (val) {
// //     //console.log(val)
// // } )

// // coding.forEach( (item) => {
// //     console.log(item)
// // })

// // function printme (item){
// //     console.log(item)
// // }

// // coding.forEach(printme)

// // const mycoding = [
// //     { 
// //         languageName : "java",
// //         languageFilename: "js"
// //     },
// //     { 
// //         languageName : "paythan",
// //         languageFilename: "py"
// //     },
// //     { 
// //         languageName : "style",
// //         languageFilename: "css"
// //     }
// // ]

// // mycoding.forEach( (key) => {
// //     console.log(key.languageName)
// // })

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newMum = myNum.filter(  (num) => num > 4)

// // const newnum = myNum.filter( (num) => {
// //        return num > 4
// // } )
// // const newNam =[]

// // myNum.forEach( (num) => {
// //     if (num > 4) {
// //         newNam.push(num)
// //     }
// // })

// // console.log(newNam)


// // const books = [
// //     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
// //     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
// //     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
// //     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
// //     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
// //     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
// //     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
// //     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
// //     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// //   ];

// // //   let usrbook = books.filter( (bk) => {
// // //     return bk.genre === "history"
// // //   } )

// // //   console.log(usrbook)

// // // let userBooks = books.filter( (bk) => bk.genre === 'History')

// // // userBooks = books.filter( (bk) => { 
// // //   return bk.publish >= 1995 && bk.genre === "History"
// // // })
// // // console.log(userBooks);

// // // let usreBook = books.filter( (bk) => bk.genre === 'Non-Fiction')
// //  usreBook = books.filter( (bk) => {
// //    return bk.genre === 'History' &&  bk.edition >=2000
// // } )


// // console.log(usreBook)

// const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newMum = myNum.map( (num) => {
// //    return num +10
// // })

// // const newnum =myNum.map( (num) => num *10)
// //                     .map( (num) => num+1).filter( (num) => num >= 50)

// // console.log(newnum)


// // reduce


// let mynum1 =  [ 1, 2, 3]

// // let mytotal = mynum1.reduce(function (acc , curr) {
// //     console.log(`acc value ${acc} or current ${curr}`)
// //       return acc + curr 
// // }, 0)

// let mytotal = mynum1.reduce( (acce, curr) => acce+curr,0)

// console.log(mytotal)


const shoppingCart = [
    {
        itemName : "js curse",
        price : 499
    },
    {
        itemName : "py curse",
        price : 399
    },
    {
        itemName : "cpp curse",
        price : 199
    },
    {
        itemName : "css curse",
        price : 299
    },
    {
        itemName : "java curse",
        price : 1499
    },
    {
        itemName : "pythan curse",
        price : 5399
    },
    {
        itemName : "style curse",
        price : 5599
    },
    {
        itemName : "sss curse",
        price : 1299
    },
]


const totalprice =shoppingCart.reduce( (acc, item) => acc+item.price,0)

console.log(totalprice)

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}