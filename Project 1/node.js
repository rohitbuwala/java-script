const endDate = "16 sep. 2024 12:00 PM";

document.getElementById("endDate").innerText =endDate;

const input = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) /1000;
    // convert into days
    input[0].value = Math.floor(diff /3600 / 24);
    input[1].value = Math.floor(diff / 3600)%24;
    input[2].value = Math.floor(diff /60)%60;
    input[3].value = Math.floor(diff)%60
}

clock()

setInterval(
    () =>{
        clock()
    },
    1000
)