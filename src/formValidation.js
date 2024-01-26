
const { postcodeValidator, postcodeValidatorExistsForCountry } = require('postcode-validator');

// Variables for form input elements
export function gatherDOMElements() {
const form = document.getElementById("info-form");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const passwordConfirmation = document.getElementById("password-confirmation");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode-input");

return [form, emailInput, passwordInput, passwordConfirmation, country, zipcode];
}

// function to check validity of fields on submission
export function validate(event) {
    event.preventDefault();

    const [form, emailInput, passwordInput, passwordConfirmation, country, zipcode] = gatherDOMElements();

    // check email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity("Not a valid email");
    } else { emailInput.setCustomValidity(""); }

    const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[A-Z]).+$/

    // check passwords
    if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.setCustomValidity("Password must contain atleast one special character, one number and one capital letter.");
        passwordInput.reportValidity();
    } else if(!(passwordConfirmation.value === passwordInput.value)) {
        passwordConfirmation.setCustomValidity("Passwords do not match");
        passwordConfirmation.reportValidity();
    }
    
    // check zipcode is from selected country
    if(!postcodeValidator(zipcode.value, country.value)) {
        zipcode.setCustomValidity("Please input a valid zipcode for the selected country.")
        zipcode.reportValidity();
    }

    resetErrorMessage(emailInput, passwordInput, passwordConfirmation, country, zipcode);

}

// event listeners

export function resetErrorMessage(emailInput, passwordInput, passwordConfirmation, country, zipcode) {
        // emailInput, passwordInput, passwordConfirmation, country, zipcode
    
    emailInput.addEventListener('input', () => {emailInput.setCustomValidity("")});
    passwordInput.addEventListener('input', () => {passwordInput.setCustomValidity("")});
    passwordConfirmation.addEventListener('input', () => {passwordConfirmation.setCustomValidity("")});
    emailInput.addEventListener('input', () => {emailInput.setCustomValidity("")});
    zipcode.addEventListener('input', () => {zipcode.setCustomValidity("")});

}

