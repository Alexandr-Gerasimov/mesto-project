export default class PopupWithForm extends Popup {
    constructor(popupSelector) {

    }

    _getInputValues() {

    }

    setEventListeners() {
        super.setEventListeners();

    }

    close() {
        super.close();
        this.element.reset()
    }

}