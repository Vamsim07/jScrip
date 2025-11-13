const min = 1;
const max = 6;
let randomNum;

const myButton = document.getElementById("myButton").onclick = function(){
    randomNum = Math.floor(Math.random() * max) +min;
    const myResult = document.getElementById("myResult").textContent = randomNum;
}