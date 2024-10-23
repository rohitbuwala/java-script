// const tinder =new Object()
// // const tinderUser = {}

// tinder.id ="abc123"
// tinder.name = "Rohit"
// tinder.isloggedIn = true
// tinder.cgpa = 5.8
// // console.log(tinder);
// // console.log(tinderUser);


// const obj1 ={1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "D"}

// //const obj3 = {obj1 , obj2}
// //const obj3 =Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// //console.log(obj3)
// // console.log(obj3)

// // console.log(Object.keys(tinder));
// // console.log(Object.values(tinder));
// //console.log(Object.entries(tinder))


// const course = {
//     courseName : "node js",
//     price : "999",
//     courseInstructor: "Rohit"
// }

// course.courseInstructor
// const {courseInstructor} =course

// console.log(courseInstructor)


      /* ---FUNCTION--- */

      function myName(){
          console.log('r')
          console.log('o')
          console.log('h')
          console.log('i')
          console.log('t')


    }

   // myName()

   //function addTwoNumber(number1, number2){
  //  console.log(number1 + number2)
  // }
   
  function addTwoNumber(number1, number2){
    let result = number1 +number2
    return result
   }

   //addTwoNumber(88, "a")

   const result = addTwoNumber(5, 8)


   function usreLoginMessage (userName){
    if(userName === undefined){
        console.log("Please Enter a UserName");
        result ()
    }
        return `${userName} just login in`
   }

   
   //console.log(usreLoginMessage("Rohit"))
   //console.log(usreLoginMessage(""))
   //console.log(usreLoginMessage())
   

   function calculateCartPrice (...num1){
    return num1

   }
   //console.log(calculateCartPrice(2,2, 55 , 22, 55, 88))

   const user = {
    userName : "Rohit",
    price : 599
   }

   function handleobject (anyobject){
        console.log(`user name is ${user.userName} and price is ${user.price}`)
   }

   //myCart(user)

  /* handleobject ({
    userName: "shyam",
    price: 499
   })*/

    const myNewArray = [200, 300, 400, 500]

    function returnSecoundValue(getArray){
            return getArray [0]
    }

    //console.log(myNewArray)

    //console.log(returnSecoundValue([200]))

        /* --- scope --- */

       // let a = 110
        //const b = 15
        //var c = 200



 if (true){
            let a = 10
            const b = 15
             c = 20
             //console.log("INNER =",a)
     }

        //console.log(a)
       // console.log(b)
        //console.log(c)

     function one(){
       const usreName = "Rohit"
       
       function two(){
          const website = "youtube"
          //console.log(usreName)
        }

       // console.log(website)

        two()
     }

     one()

     if (true) {
        const usreName = "Rohit"

        if (usreName === "hitesh") {
         const website = " youtube" 
         //console.log(usreName + website);
         
        }

       // console.log(website)
     }

     //console.log(usreName)

     //console.log(addOne(5))
     
     function addOne (num){
    return num +1
       
  }

  const addTwo = function (num){
    return num+1
  }
  
  //console.log(addTwo(2254))


  /* ++++--- ARROW FUNCTION ---+++ */

  const usre = {
    usreName : "Rohit",
    price : 499,

      welcomeMessage : function(){
        console.log(`${this.usreName}, welcome to website`)
        //console.log(this);
        
      }
  }


  //usre.welcomeMessage()
  //usre.usreName = "shyam"
  //usre.welcomeMessage()

  //console.log(this)

  function chai (){
    console.log(this)
  }

  chai()