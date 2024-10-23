let btn1 = document.querySelector("#btn1");

/*btn1.onclick = () => {
    console.log("btn1 one is clicked");
    let a = 25;
    a++;
    console.log(a);
};

let box = document.querySelector("div");

box.onmouseover =() =>{
        console.log("your are inside div")
}*/

/*btn1.addEventListener("click", (evt) => {
    console.dir("button one was clicked-handler1")
})

btn1.addEventListener("click", (evt) => {
    console.dir("button one was clicked-handler2")
})

const handler3 = () => {
    console.dir("button one was clicked-handler3")
}

btn1.addEventListener("click", handler3)

btn1.addEventListener("click", (evt) => {
    console.dir("button one was clicked-handler4")
})

btn1.removeEventListener("click", handler3)*/

let mode = document.querySelector("#mode");
let body = document.querySelector("body");

let currMode = "light";

mode.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        //document.querySelector("body").style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        //document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode)
});