let userName;
document.getElementById("mySubmit").onclick = function(){
    userName=document.getElementById("myText").value;
    document.getElementById("heading").textContent=(`Hello..! ${userName}`)
}


//const

const PI =3.14159;
let radius;
let circumference;
document.getElementById("myButton").onclick = function(){
    radius = document.getElementById("myRadius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent= circumference +"cm";
}