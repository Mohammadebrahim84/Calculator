const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");

let operation;

// اسکریپت تولید قطرات باران
document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.querySelector(".rain");
    const dropsCount = 50; // تعداد قطرات

    for (let i = 0; i < dropsCount; i++) {
        const drop = document.createElement("div");
        drop.classList.add("drop");
        // موقعیت افقی تصادفی
        drop.style.left = Math.random() * 100 + "vw";
        // سرعت انیمیشن تصادفی بین 0.5 تا 2 ثانیه
        drop.style.animationDuration = (0.5 + Math.random() * 1.5) + "s";
        // تاخیر شروع تصادفی تا باران پراکنده شود
        drop.style.animationDelay = Math.random() * 5 + "s";
        rainContainer.appendChild(drop);
    }
});