const regexName = new RegExp(/^[a-zA-ZÑñÁÉÍÓÚáéíóú ]{2,45}$/);
const regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
// esta regex valida números de teléfono a nivel nacional (Argentina)
const regexPhone = new RegExp(/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/);
console.log(regexPhone.test("1123456789"));


const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputPhone = document.getElementById("input-phone");
const btnSubmit = document.getElementById("btn-submit");

function genericRegexValidation(regex, input) {
    if (regex.test(input.value)) {
        input.style.borderColor = "#28a745";
        btnSubmit.classList.remove("disabled");
    } else {
        input.style.borderColor = "#dc3545";
        btnSubmit.classList.add("disabled");
    }

    if (input.value === "") input.style.borderColor = "#ccc";

    if (inputPhone.value === "") btnSubmit.classList.remove("disabled");
}

inputName.addEventListener("keyup", () => genericRegexValidation(regexName, inputName));
inputEmail.addEventListener("keyup", () => genericRegexValidation(regexEmail, inputEmail));
inputPhone.addEventListener("keyup", () => genericRegexValidation(regexPhone, inputPhone));