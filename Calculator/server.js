const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".btn");
const equals = document.querySelector(".equals");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        input.innerHTML = input.innerText + button.innerHTML;
        const calc = input.innerText;
        console.log(calc);
        equals.addEventListener("click", () => {
            input.innerHTML = eval(calc);
        });
        document.querySelector(".percent").addEventListener("click", () => {
            input.innerHTML = eval(calc) * 100;
        });
    });
});

document.querySelector(".clear-all").addEventListener("click", () => {
    input.innerHTML = "";
});

document.querySelector(".clear").addEventListener("click", () => {
    input.innerHTML = input.innerText.slice(0, -1);
});      
