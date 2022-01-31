const validationConfig = {
  formSelector: '.popup__container',
  inputSelector: '.popup__item',
  inputInvalidClass: 'popup__item_error',
  errorClass: 'popup__item-error_active',
  buttonSelector: '.popup__button',
  buttonDisabledClass: 'popup__button_disabled'
};

//валидация  
  const formInput = document.querySelector('.popup__item');
  const formError = document.querySelector('.popup__item-error')
  
  const showInputError = (inputElement, inputInvalidClass, errorElement, errorClass, errorMessage) => {
    inputElement.classList.add(inputInvalidClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
  const hideInputError = (inputElement, inputInvalidClass, errorElement, errorClass) => {
    inputElement.classList.remove(inputInvalidClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
  
  const isValid = (formElement, inputElement, inputInvalidClass, errorClass) => {
    const errorElement = formElement.querySelector(`#error-${inputElement.id}`)
    if (!inputElement.validity.valid) {
      showInputError(inputElement, inputInvalidClass, errorElement, errorClass, inputElement.validationMessage);
    } else {
      hideInputError(inputElement, inputInvalidClass, errorElement, errorClass);
    }
    console.log(formInput.validity.valid);
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
  }
  
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
    Array.from(document.querySelectorAll(formSelector)).forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement, rest);
    });
  };
  
  enableValidation(validationConfig);
  