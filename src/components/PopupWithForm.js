import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector)
        this._popupForm = this._popupElement.querySelector('.popup__container')
        this._button = this._popupElement.querySelector('button[type="submit"]')
        this.buttonDefaultText = this._button.textContent
        this._handleFormSubmit = handleFormSubmit
    }

    _getInputValues() {
        this._inputList = this._popupElement.querySelectorAll('.popup__item');
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues
    }

    setEventListeners() {
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues())
            console.log(this._getInputValues())
        })
        super.setEventListeners();
    }

    setSubmitAction(action) {
        this.handleFormSubmit = action
    }

    renderLoading(isSending) {
        this._button.textContent = isSending ? 'Сохранение...' : this._buttonDefaultText
    }

    close() {
        this._popupForm.reset()
        super.close();
    }
}