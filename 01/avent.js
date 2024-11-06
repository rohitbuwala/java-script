// let start = document.querySelector('.srt')
// let stop = document.querySelector('.end')
// let watch = document.querySelector('.watch')

// let setid;

// start.addEventListener('click', function () {

//     setInterval(function () {
//         let date = new Date();
//         setid = watch.innerHTML = date.toLocaleTimeString();
//     },1000)
// } );

// stop.addEventListener('click', function () {
//     clearInterval(setid); // Correctly clears the interval
// });







let start = document.querySelector('.srt');
let stop = document.querySelector('.end');
let watch = document.querySelector('.watch');

let setid;

start.addEventListener('click', function () {
    // Start the interval and save the ID to setid
    setid = setInterval(function () {
        let date = new Date();
        watch.innerHTML = date.toLocaleTimeString();
    }, 1000); // Move the interval time here
});

stop.addEventListener('click', function () {
    clearInterval(setid); // Clear the interval using the correct ID
});

