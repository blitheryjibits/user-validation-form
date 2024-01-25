const gatherDOMElements = require('./formValidation').gatherDOMElements;
const validate = require('./formValidation').validate;
const [form, emailInput, passwordInput, passwordConfirmation, country, zipcode] = gatherDOMElements();

// add background to html body
const body = document.querySelector('body');
body.setAttribute(
    "style",
    "background-image: url('./background.jpg')"
);

// initialize submit button
form.addEventListener('submit', validate);
