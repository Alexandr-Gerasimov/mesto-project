import Popup from "./Popup";

const namePopupImage = document.querySelector('.popup-image__picture')
const namePopupTitle = document.querySelector('.popup-image__description')

export default class PopupWithImage extends Popup {
    constructor(cardData, popupSelector) {
        super(popupSelector)
        this._cardData = cardData;
    }

    open() {
        super.open();
        namePopupImage.src = this._cardData.link;
        namePopupImage.alt = this._cardData.name;
        namePopupTitle.textContent = this._cardData.name
    }
}