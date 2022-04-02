import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        
    }

    _getInputValues() {
        this._inputList = this._element.querySelectorAll(".popup__item");
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
    }

    setEventListeners() {
        super.setEventListeners();

    }

    close() {
        super.close();
        this.element.reset()
    }
}