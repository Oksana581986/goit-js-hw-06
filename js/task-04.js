const counter = document.querySelector("#counter");
const value = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", () =>{
    counterValue -= 1;
    updateCounterValue();
});

incrementBtn.addEventListener("click", () => {
counterValue +=1;
updateCounterValue();
});

function  updateCounterValue () {
    value.textContent = counterValue;
}

updateCounterValue();