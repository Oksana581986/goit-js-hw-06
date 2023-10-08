const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("blur", () => {
const inputValue = validationInput.value.trim();
const dataLength = parseInt(validationInput.getAttribute("data-length"));

function setValidationClass(valid, invalid) {
    validationInput.classList.add(valid);
    validationInput.classList.remove(invalid);
    }  

if (inputValue.length === dataLength) {
    setValidationClass("valid","invalid");
    } else {
    setValidationClass("invalid", "valid");
    }
});