// import img from './background.jpg';
const gatherDOMElements = require('./formValidation').gatherDOMElements;
const validate = require('./formValidation').validate;
const [form, emailInput, passwordInput, passwordConfirmation, country, zipcode] = gatherDOMElements();



form.addEventListener('submit', validate);
