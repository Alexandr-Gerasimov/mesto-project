import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._image = document.querySelector('.popup-image__picture')
        this._text = document.querySelector('.popup-image__description')
    }

    open(name, link) {
        this._image.src = link;
        this._image.alt = name;
        this._text.textContent = name
        super.open();
    }
}