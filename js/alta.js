const regexProductBrand = new RegExp(/^[a-zA-ZÑñÁÉÍÓÚáéíóú0-9 ]{2,45}$/);
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
// obteniendo del DOM los inputs de edad mínima y máxima JUNTOS
const inputsAge = document.querySelectorAll(".age");

debugger;
function genericRegexValidation(regex, input) {
    if (input.value.trim()) {
        if (regex.test(input.value)) {
            input.style.borderColor = "#28a745";
            btnSubmit.classList.remove("disabled");
        } else {
            input.style.borderColor = "#dc3545";
            btnSubmit.classList.add("disabled");
            input.classList.toggle("is-invalid");
        }

        if (input.value === "") input.style.borderColor = "#ccc"
        if (input.type === "number") {
            if (inputMinimumAge.value < 0 || inputMaximumAge.value < 0) input.style.borderColor = "#dc3545";
            if (inputMinimumAge.value > inputMaximumAge.value) input.style.borderColor = "#dc3545";
        }

        // switch (input) {
        //     case inputProductBrand: {
        //         if (input.value.trim()) {
        //             if (regex.test(input.value)) {
        //                 input.style.borderColor = "#28a745";
        //                 btnSubmit.classList.remove("disabled");
        //             } else {
        //                 input.style.borderColor = "#dc3545";
        //                 btnSubmit.classList.add("disabled");
        //                 input.classList.toggle("is-invalid");
        //             }
        //         }
        //         if (input.value === "") input.style.borderColor = "#ccc";
        //         break;
        //     }
        //     case inputProductName: {
        //         if (input.value.trim()) {
        //             if (regex.test(input.value)) {
        //                 input.style.borderColor = "#28a745";
        //                 btnSubmit.classList.remove("disabled");
        //             } else {
        //                 input.style.borderColor = "#dc3545";
        //                 btnSubmit.classList.add("disabled");
        //                 input.classList.toggle("is-invalid");
        //             }
        //         }
        //         if (input.value === "") input.style.borderColor = "#ccc";
        //         break;
        //     }
        //     case inputProductShortDesc: {
        //         if (input.value.trim()) {
        //             if (regex.test(input.value)) {
        //                 input.style.borderColor = "#28a745";
        //                 btnSubmit.classList.remove("disabled");
        //             } else {
        //                 input.style.borderColor = "#dc3545";
        //                 btnSubmit.classList.add("disabled");
        //                 input.classList.toggle("is-invalid");
        //             }
        //         }
        //         if (input.value === "") input.style.borderColor = "#ccc";
        //         break;
        //     }
        //     case inputProductLongDesc: {
        //         if (input.value.trim()) {
        //             if (regex.test(input.value)) {
        //                 input.style.borderColor = "#28a745";
        //                 btnSubmit.classList.remove("disabled");
        //             } else {
        //                 input.style.borderColor = "#dc3545";
        //                 btnSubmit.classList.add("disabled");
        //                 input.classList.toggle("is-invalid");
        //             }
        //         }
        //         if (input.value === "") input.style.borderColor = "#ccc";
        //         break;
        //     }
        //     case inputMinimumAge: {
        //         if (regex.test(input.value)) {
        //             input.style.borderColor = "#28a745";
        //             btnSubmit.classList.remove("disabled");
        //         } else {
        //             input.style.borderColor = "#dc3545";
        //             btnSubmit.classList.add("disabled");
        //             input.classList.toggle("is-invalid");
        //         }
        //         if (input.value === "") input.style.borderColor = "#ccc";
        //         break;
        //     }
        //     case inputMaximumAge: {
        //         if (regex.test(input.value)) {
        //             input.style.borderColor = "#28a745";
        //             btnSubmit.classList.remove("disabled");
        //         } else {
        //             input.style.borderColor = "#dc3545";
        //             btnSubmit.classList.add("disabled");
        //             input.classList.toggle("is-invalid");
        //         }
        //         if (input.value === "") input.style.borderColor = "#ccc";
        //         break;
        //     }
        //     case inputProductPrice: {
        //         if (input.value.trim()) {
        //             if (regex.test(input.value)) {
        //                 input.style.borderColor = "#28a745";
        //                 btnSubmit.classList.remove("disabled");
        //             } else {
        //                 input.style.borderColor = "#dc3545";
        //                 btnSubmit.classList.add("disabled");
        //                 input.classList.toggle("is-invalid");
        //             }
        //         }
        //         if (input.value === "") input.style.borderColor = "#ccc";
        //         break;
        //     }
        //     case inputProductStock: {
        //         if (input.value.trim()) {
        //             if (regex.test(input.value)) {
        //                 input.style.borderColor = "#28a745";
        //                 btnSubmit.classList.remove("disabled");
        //             } else {
        //                 input.style.borderColor = "#dc3545";
        //                 btnSubmit.classList.add("disabled");
        //                 input.classList.toggle("is-invalid");
        //             }
        //         }
        //         if (input.value === "") input.style.borderColor = "#ccc";
        //         break;
        //     }
        //     default: {
        //         break;
        //     }
        // }
    }

    if (inputMinimumAge.value > inputMaximumAge.value) {
        inputMinimumAge.style.borderColor = "#dc3545";
        inputMaximumAge.style.borderColor = "#dc3545";
    }
}

inputProductBrand.addEventListener("keyup", () => genericRegexValidation(regexProductBrand, inputProductBrand));
inputProductName.addEventListener("keyup", () => genericRegexValidation(regexProductName, inputProductName));
inputProductShortDesc.addEventListener("keyup", () => genericRegexValidation(regexProductShortDesc, inputProductShortDesc));
inputProductLongDesc.addEventListener("keyup", () => genericRegexValidation(regexProductLongDesc, inputProductLongDesc));
inputProductPrice.addEventListener("keyup", () => genericRegexValidation(regexProductPrice, inputProductPrice));
inputProductStock.addEventListener("keyup", () => genericRegexValidation(regexProductStock, inputProductStock));
// validando ambos inputs de edad para controlar al mismo tiempo
inputsAge.forEach(input => {
    input.addEventListener("click", () => {
        genericRegexValidation(regexMinimumAge, inputMinimumAge);
        genericRegexValidation(regexMaximumAge, inputMaximumAge);
    })
});

console.log(__dirname);