export { enableValidation, disableButton, enableButton }

//валидация  
  
const showInputError = (inputElement, inputInvalidClass, errorElement, errorClass, errorMessage) => {
  inputElement.classList.add(inputInvalidClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};
  
const hideInputError = (inputElement, inputInvalidClass, errorElement, errorClass) => {
  inputElement.classList.remove(inputInvalidClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};
  
const isValid = (formElement, inputElement, inputInvalidClass, errorClass) => {
  const errorElement = formElement.querySelector(`#error-${inputElement.id}`)
  if (!inputElement.validity.valid) {
    showInputError(inputElement, inputInvalidClass, errorElement, errorClass, inputElement.validationMessage);
  } else {
    hideInputError(inputElement, inputInvalidClass, errorElement, errorClass);
  }
};
  
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};
  
const disableButton = (buttonElement, buttonDisabledClass) => {
  buttonElement.classList.add(buttonDisabledClass);
  buttonElement.disabled = true;
};

const enableButton = (buttonElement, buttonDisabledClass) => {
  buttonElement.classList.remove(buttonDisabledClass);
  buttonElement.disabled = false;
};
  
const toggleButtonState = (formElement, inputList, buttonSelector, buttonDisabledClass) => {
  const buttonElement = formElement.querySelector(buttonSelector);
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, buttonDisabledClass);
  } else {
    enableButton(buttonElement, buttonDisabledClass);
  }
};

const setEventListeners = (formElement, { inputSelector, inputInvalidClass, errorClass, buttonSelector, buttonDisabledClass }) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, inputInvalidClass, errorClass);
      toggleButtonState(formElement, inputList, buttonSelector, buttonDisabledClass);
    });
  });
  toggleButtonState(formElement, inputList, buttonSelector, buttonDisabledClass); 
};
  
const enableValidation = ({ formSelector, ...rest }) => {
  Array.from(document.querySelectorAll(formSelector)).forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, rest);
  });
};


