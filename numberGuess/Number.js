const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter valid number..");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter valid number..");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("You entered low number. Try Again..");
        }
        else if(guess > answer){
            window.alert("You entered High Number. Try Again..");
        }
        else{
            window.alert(`Congrats..! The answer is ${answer}. it's took ${attempts} attempts.`);
            running = false;
        }
    }
}