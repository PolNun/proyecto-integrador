const regexProductBrand = new RegExp(/^[a-zA-ZÑñÁÉÍÓÚáéíóú ]{2,45}$/);
const regexProductName = new RegExp(/^[a-zA-ZÑñÁÉÍÓÚáéíóú ]{2,56}$/);
const regexProductShortDesc = new RegExp(/^[a-zA-ZÑñÁÉÍÓÚáéíóú ]{2,76}$/);
const regexProductLongDesc = new RegExp(/^[a-zA-ZÑñÁÉÍÓÚáéíóú ]{2,256}$/);
const regexMinimumAge = new RegExp(/^[0-9]{1,2}$/);
const regexMaximumAge = new RegExp(/^[0-9]{1,2}$/);
const regexProductPrice = new RegExp(/^[0-9]{1,7}$/);
const regexProductStock = new RegExp(/^[0-9]{1,7}$/);

const inputProductBrand = document.getElementById("input-product-brand");
const inputProductName = document.getElementById("input-product-name");
const inputProductShortDesc = document.getElementById("input-product-short-desc");
const inputProductLongDesc = document.getElementById("input-product-long-desc");
const inputMinimumAge = document.getElementById("input-minimum-age");
const inputMaximumAge = document.getElementById("input-maximum-age");
const inputProductPrice = document.getElementById("input-product-price");
const inputProductStock = document.getElementById("input-product-stock");
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
}

inputProductBrand.addEventListener("keyup", () => genericRegexValidation(regexProductBrand, inputProductBrand));
inputProductName.addEventListener("keyup", () => genericRegexValidation(regexProductName, inputProductName));
inputProductShortDesc.addEventListener("keyup", () => genericRegexValidation(regexProductShortDesc, inputProductShortDesc));
inputProductLongDesc.addEventListener("keyup", () => genericRegexValidation(regexProductLongDesc, inputProductLongDesc));
inputMinimumAge.addEventListener("keyup", () => genericRegexValidation(regexMinimumAge, inputMinimumAge));
inputMaximumAge.addEventListener("keyup", () => genericRegexValidation(regexMaximumAge, inputMaximumAge));
inputProductPrice.addEventListener("keyup", () => genericRegexValidation(regexProductPrice, inputProductPrice));
inputProductStock.addEventListener("keyup", () => genericRegexValidation(regexProductStock, inputProductStock));