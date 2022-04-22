const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#total-amount");
const tips = document.querySelectorAll(".tips");
const customTip = document.querySelector(".custom-tip");
const error = document.querySelector(".error");
const resetBtn = document.querySelector(".reset");



billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val){
    val.addEventListener("click", handleClick);
});
customTip.addEventListener("input", customTipFun);
resetBtn.addEventListener("click", reset);


billInput.value = "";
peopleInput.value = "";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);


let billValue = 0.0;
let peopleValue = 1
let tipValue = 0.15

function billInputFun(){
    billValue = parseFloat(billInput.value)
    calculateTip()
}

function peopleInputFun(){
    peopleValue = parseFloat(peopleInput.value)
    
    if (peopleValue === 0){
        error.style.display = "flex"
        peopleInput.style.border = "thick solid red"
    }else if (peopleValue < 1){
        error.style.display = "flex"
        error.innerHTML = "Can't be negative"
        peopleInput.style.border = "thick solid red"
    } else{
        error.style.display = "none"
        peopleInput.style.border = "none"
    }

    calculateTip();
}

function customTipFun(){
    tipValue = parseFloat(customTip.value) / 100;

    tips.forEach(function (val){
        val.classList.remove("active-tip");
    });

    calculateTip()
}


function handleClick (event){
    tips.forEach(function (val){
        val.classList.remove("active-tip");
        if (event.target.innerHTML == val.innerHTML){
            val.classList.add('active-tip');
            tipValue = parseFloat(val.innerHTML)/100;
        }
    })
    calculateTip()
}

function calculateTip(){
    if (peopleValue >= 1){
        let tipAmount = (billValue * tipValue) / peopleValue;
        let total = (billValue + tipAmount) / peopleValue;

        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }



}

function reset(){
    billInput.value = "";
    billInputFun();
    peopleInput.value = "";
    peopleInputFun();
    customTip.value = "";
    tipValue = "";
    tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
    totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);  
}