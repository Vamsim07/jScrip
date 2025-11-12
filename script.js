let userName;
document.getElementById("mySubmit").onclick = function(){
    userName=document.getElementById("myText").value;
    document.getElementById("heading").textContent=(`Hello..! ${userName}`)
}