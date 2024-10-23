const getcolor =() =>{
    const randomNumber = Math.floor(math.random() * 16777215);
    const randomcode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomcode;
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
);

getcolor();