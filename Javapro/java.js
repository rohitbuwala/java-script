/*+++++----PROJECT-01----+++++*/

// const button =document.querySelectorAll('.button');
// const body =document.querySelector('body');

// button.forEach( function (btn){
//     //console.log(btn);
//     btn.addEventListener('click', function (e) {
//         console.log(e)
//         console.log(e.target)
//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'white') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id;
//         }
//     })
// })



/*++++---PROJECT-02---++++*/

/*const form =document.querySelector('form');
form.addEventListener('submit' , function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result =document.querySelector('#results');

    if (height === '' || height <0 || isNaN(height)) {
        result.innerHTML =`Please give a vaild height ${height}`
    }else if (weight === '' || weight <0 || isNaN(weight)) {
        result.innerHTML =`Please give a vaild weight ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`
    }


});*/




/* ++++---- Project-03---++++*/

// const clock =document.getElementById('clock')

// //setinterval ek mathod h jo kisi page ko kitne time se refesh krna h krta h 
// //The setInterval() method of the Window interface repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

// setInterval(function(){
//     let date =new Date();
//      clock.innerHTML =date.toLocaleTimeString();
//     }, 1000);



/*+++--- Project- 04 ---++++*/

/*let randomNum =parseInt(Math.random()*100+1)
const submit = document.querySelector('#subt') 
const usreInput =document.querySelector('#guessField') 
const guessslot =document.querySelector('.guesses') 
const remaining   =document.querySelector('.lastResult')
const lowOrHi  =document.querySelector('.lowOrHi')
const startover    =document.querySelector('.resultParas')

const p =document.createElement('p')

let preGuess = [];
let numguess = 1;

let playGame =true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
       const guess= parseInt(usreInput.value);
       validateguess(guess);
    })
}

function validateguess(guess){

    if(isNaN(guess)){
        alert(`Please Enter a validate Number`);
    }else if(guess < 1) {
             alert(`Please Enter a Number More then 1`);
    }else if(guess >100){
        alert(`Please Enter a Number less then 100`)
     }else{
        preGuess.push(guess);
        if (numguess === 11){
            displayguess(guess)
            displaymsg(`Game Over . Random Number was ${randomNum}`)
            endGame()
        }else{
            displayguess(guess)
            cheackguess(guess)
        }
     }
}

function cheackguess(guess) {
    if(guess === randomNum){
        displaymsg(`You guessted Right`)
        endGame();
    } else if(guess < randomNum){
        displaymsg(`Number is Tooo Low`)
    }else if( guess > randomNum){
        displaymsg(`Number is Tooo High`)
}
}
function displayguess(guess) {
    
    usreInput.value ='';
    guessslot.innerHTML +=`${guess}, `;
    numguess ++;
    remaining.innerHTML=`${11 - numguess}`
}

function displaymsg(msg) {
    lowOrHi.innerHTML =`<h2>${msg}</h2>`;
}

function endGame(end) {
    
    usreInput.value =''
    usreInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML =`<h2 id='newGame>Start New Game</h2>`;
    startover.appendChild(p);
    playGame =false;
    newgame();
}

function newgame(newGame) {
    const newGameButton =document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNum =parseInt(Math.random() * 100 + 1);
        preGuess =[];
        numguess =1
        remaining.innerHTML=`${11 - numguess}`
        usreInput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame =true
    })
}*/


/*+++++----PROJECT-05----+++++*/

// const randomcolour = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += hex[Math.floor(Math.random() * 16)];
//         console.log(i)
//     };
//     return color;
// }

// let id;

// const startchangingcolor = function(){
//     if (!id) {
        
//         id =setInterval(chanebgcolor,1000)
//     }
//     function chanebgcolor(){

//         document.body.style.backgroundColor=randomcolour()
//     }
// };
// const stopcolorchanging =function (){
//     clearInterval(id)
//     id =null;
// };


// document.querySelector('.str').addEventListener('click', startchangingcolor)

// document.querySelector('.stp').addEventListener('click',stopcolorchanging)







    /*++++++-----Project06----+++++*/


const insret =document.querySelector('#insert')

window.addEventListener('keydown',(e)=>{
    insret.innerHTML=`
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
    
    `
})