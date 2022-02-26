export default class FormValidator {
  constructor({ formSelector, inputSelector, inputInvalidClass, errorClass, buttonSelector, buttonDisabledClass }, formElement) {
    this.formSelector = formSelector;
    this.inputSelector = inputSelector;
    this.inputInvalidClass = inputInvalidClass;
    this.errorClass = errorClass;
    this.buttonSelector = buttonSelector;
    this.buttonDisabledClass = buttonDisabledClass;
  }

  _showInputError(inputElement, inputInvalidClass, errorElement, errorClass, errorMessage) {
    inputElement.classList.add(inputInvalidClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
  };
    
  _hideInputError(inputElement, inputInvalidClass, errorElement, errorClass) {
    inputElement.classList.remove(inputInvalidClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  };
    
  _isValid(formElement, inputElement, inputInvalidClass, errorClass) {
    this.errorElement = formElement.querySelector(`#error-${inputElement.id}`)
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputInvalidClass, this.errorElement, errorClass, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement, inputInvalidClass, this.errorElement, errorClass);
    }
  };
    
  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => {
      return !inputElement.validity.valid;
    });
  };
    
  _disableButton(buttonElement, buttonDisabledClass) {
    buttonElement.classList.add(buttonDisabledClass);
    buttonElement.disabled = true;
  };
  
  _enableButton(buttonElement, buttonDisabledClass) {
    buttonElement.classList.remove(buttonDisabledClass);
    buttonElement.disabled = false;
  };
    
  _toggleButtonState(formElement, inputList, buttonSelector, buttonDisabledClass) {
    this.buttonElement = formElement.querySelector(buttonSelector);
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(this.buttonElement, buttonDisabledClass);
    } else {
      this._enableButton(this.buttonElement, buttonDisabledClass);
    }
  };
  
  _setEventListeners(formElement, { inputSelector, inputInvalidClass, errorClass, buttonSelector, buttonDisabledClass }) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement, inputInvalidClass, errorClass);
        this._toggleButtonState(formElement, inputList, buttonSelector, buttonDisabledClass);
      });
    });
    this._toggleButtonState(formElement, inputList, buttonSelector, buttonDisabledClass);
  };
    
  enableValidation({ formSelector, ...rest }) {
    Array.from(document.querySelectorAll(formSelector)).forEach(formElement => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(formElement, rest);
    });
  };

}