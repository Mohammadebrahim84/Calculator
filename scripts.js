const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");

let operation;

// اسکریپت تولید قطرات باران
document.addEventListener("DOMContentLoaded", () => 
    {
    const rainContainer = document.querySelector(".rain");
    const dropsCount = 400; // تعداد قطرات

    for (let i = 0; i < dropsCount; i++) 
    {
        const drop = document.createElement("div");
        drop.classList.add("drop");
        drop.style.left = Math.random() * 100 + "vw";

        drop.style.animationDuration = (0.5 + Math.random() * 1.5) + "s";

        drop.style.animationDelay = Math.random() * 5 + "s";
        rainContainer.appendChild(drop);
    }

});



function appendNumber(number) 
{
    if (number === "." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText += number;
}

function chooseOperation(operand) 
{
    if (currDisplay.innerText === "") return;
    compute(operand);
    operation = operand;
    currDisplay.innerText += operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}

function clearDisplay() 
{
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
}

function compute(operand)
{
    let result;
    const previousValue = parseFloat(prevDisplay.innerText);
    const currentValue = parseFloat(currDisplay.innerText);

    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (operation) {
        case "+" :
        result = previousValue + currentValue;
        break;

        case "-" :
        result = previousValue - currentValue;
        break;

        case "*" :
        result = previousValue * currentValue;
        break;

        case "/" :
        result = previousValue / currentValue;
        break;


        default :
        result;
    }
    currDisplay.innerText = result;
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    });
});

operands.forEach((operand) => 
{
    operand.addEventListener("click" , () => 
    {
        chooseOperation(operand.innerText);
    });
});

clearBtn.addEventListener("click" , () => 
{
    clearDisplay();
});

equalBtn.addEventListener("click" , () => 
{
    compute();
    prevDisplay.innerText = "";
});

delBtn.addEventListener("click" , () => 
{
    currDisplay.innerText = currDisplay.innerText.slice(0,-1);
});