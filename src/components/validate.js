export default class FormValidator {
  constructor({ formSelector, inputSelector, inputInvalidClass, errorClass, buttonSelector, buttonDisabledClass }, formElement) {
    this.formSelector = formSelector;
    this.inputSelector = inputSelector;
    this.inputInvalidClass = inputInvalidClass;
    this.errorClass = errorClass;
    this.buttonSelector = buttonSelector;
    this.buttonDisabledClass = buttonDisabledClass;
  }

  showInputError(inputElement, inputInvalidClass, errorElement, errorClass, errorMessage) {
    inputElement.classList.add(inputInvalidClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
  };
    
  hideInputError(inputElement, inputInvalidClass, errorElement, errorClass) {
    inputElement.classList.remove(inputInvalidClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };
    
  isValid(formElement, inputElement, inputInvalidClass, errorClass) {
    this.errorElement = formElement.querySelector(`#error-${inputElement.id}`)
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputInvalidClass, this.errorElement, errorClass, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement, inputInvalidClass, this.errorElement, errorClass);
    }
  };
    
  hasInvalidInput(inputList) {
    console.log(inputList)
    return inputList.some(inputElement => {
      console.log(inputElement)
      
      return !inputElement.validity.valid;
    });
  };
    
  disableButton(buttonElement, buttonDisabledClass) {
    buttonElement.classList.add(buttonDisabledClass);
    buttonElement.disabled = true;
  };
  
  enableButton(buttonElement, buttonDisabledClass) {
    buttonElement.classList.remove(buttonDisabledClass);
    buttonElement.disabled = false;
  };
    
  toggleButtonState(formElement, inputList, buttonSelector, buttonDisabledClass) {
    this.buttonElement = formElement.querySelector(buttonSelector);
    if (this.hasInvalidInput(inputList)) {
      console.log(inputList)
      this.disableButton(this.buttonElement, buttonDisabledClass);
    } else {
      this.enableButton(this.buttonElement, buttonDisabledClass);
    }
  };
  
  setEventListeners(formElement, { inputSelector, inputInvalidClass, errorClass, buttonSelector, buttonDisabledClass }) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    console.log(inputList)
    console.log(formElement)
    console.log(inputSelector)
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this.isValid(formElement, inputElement, inputInvalidClass, errorClass);
        this.toggleButtonState(formElement, inputList, buttonSelector, buttonDisabledClass);
      });
    });
    this.toggleButtonState(formElement, inputList, buttonSelector, buttonDisabledClass);
  };
    
  enableValidation({ formSelector, ...rest }) {
    Array.from(document.querySelectorAll(formSelector)).forEach(formElement => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this.setEventListeners(formElement, rest);
    });
  };

}