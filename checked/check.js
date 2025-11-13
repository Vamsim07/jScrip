const mySubscribe = document.getElementById("mySubscribe");
const mySubmit = document.getElementById("mySubmit");
const paypalCard = document.getElementById("paypalCard");
const visaCard = document.getElementById("visaCard");
const masterCard = document.getElementById("masterCard");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function(){
    if(mySubscribe.checked){
        subResult.textContent = `Your Subscribed`;
    }
    else{
        subResult.textContent = `Your Not Subscribed`;
    }
    if(paypalCard.checked){
        payResult.textContent = `You'r pay with Paypal`;
    }
    else if(visaCard.checked){
        payResult.textContent = `You'r pay with Visa`;
    }
    else if(masterCard.checked){
        payResult.textContent = `You'r pay with Master Card`;
    }
    else{
        payResult.textContent = `select the payment method`;
    }
}