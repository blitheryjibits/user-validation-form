
// Variables for form input elements
const form = document.getElementById("info-form");

const emailInput = document.getElementById("email-input");

const passwordInput = document.getElementById("password-input");

const passwordConfirmation = document.getElementById("password-confirmation");

const country = document.getElementById("country-input");

const zipcode = document.getElementById("zipcode-input");

// function to check validity of fields on submission
function validate(event) {
    event.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.setCustomValidity("not a valid email");
    }

    const passwordRegex = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[A-Z]).+$/

    if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.setCustomValidity("password must contain atleast one special character, one number and one capital letter.");
        passwordInput.reportValidity();
    } else if(!(passwordConfirmation.value === passwordInput.value)) {
        passwordConfirmation.setCustomValidity("passwords do not match");
        passwordConfirmation.reportValidity();
    }



    // check
    // zipcode is from selected country


}

// event listeners

emailInput.addEventListener('input', () => {emailInput.setCustomValidity("")});
passwordInput.addEventListener('input', () => {passwordInput.setCustomValidity("")});
passwordConfirmation.addEventListener('input', () => {passwordConfirmation.setCustomValidity("")});
emailInput.addEventListener('input', () => {emailInput.setCustomValidity("")});
zipcode.addEventListener('input', () => {zipcode.setCustomValidity("")});


form.addEventListener('submit', validate);
