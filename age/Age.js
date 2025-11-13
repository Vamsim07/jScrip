const mySubmit = document.getElementById("mySubmit");
const myText = document.getElementById("myText");
const Result = document.getElementById("Result");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);


    if(age >= 70){
        Result.textContent = `your too old to Drive..!`;
    }
    else if(age >=18){
         Result.textContent = `Your age enouh to ride the bike`;
    }
    else{
        Result.textContent = `your a children`;
    }

}
